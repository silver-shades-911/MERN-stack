const mongoose = require("./DBsetup");

// ------------------ Order Schema and Model ------------------
// Define the schema for orders; each order has an item and a price.
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

// Create the Order model to perform CRUD operations on orders.
const Order = mongoose.model("Order", orderSchema);

// ------------------ Customer Schema and Model ------------------
// Define the schema for customers.
// The 'orders' field is an array of ObjectId references that point to Order documents.
const customerSchema = new mongoose.Schema({
  Name: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

/*
  Middleware: Post hook for findOneAndDelete on Customer.
  - When a customer is deleted, this middleware is triggered.
  - It checks if the customer document (doc) has any orders.
  - If orders exist, it deletes all Order documents whose _id is in the customer's orders array.
  - This ensures that orphan orders are removed, maintaining data integrity.
*/
customerSchema.post("findOneAndDelete", async function (doc) {
  if (doc && doc.orders && doc.orders.length > 0) {
    try {
      const res = await Order.deleteMany({ _id: { $in: doc.orders } });
      console.log("Deleted Orders:", res);
    } catch (error) {
      console.error("Error deleting orders:", error);
    }
  } else {
    console.log("No orders found for this customer.");
  }
});

// Create the Customer model to perform operations on customer documents.
const Customer = mongoose.model("Customer", customerSchema);

// ------------------ Function to Add Order Items ------------------
/*
  Function: addItems
  - Purpose: Bulk insert several order documents into the Order collection.
  - Data Flow: Uses Order.insertMany() to add orders, which can later be referenced by customers.
*/
async function addItems() {
  let result = await Order.insertMany([
    { item: "Chips", price: 10 },
    { item: "Apple", price: 30 },
    { item: "Choclate", price: 100 },
  ]);
  console.log(result);
}

// ------------------ Function to Add a Customer ------------------
/*
  Function: addCustomer
  - Purpose: Create a customer and associate orders with that customer.
  - Data Flow:
      1. A new Customer document is created.
      2. Existing Order documents are retrieved (using findOne) based on their item.
      3. The Order document ObjectIds are pushed into the customer's 'orders' array.
      4. The customer document is saved, storing the relationship.
*/
async function addCustomer() {
  let cust1 = new Customer({
    Name: "Stevan Stone",
  });

  // Find specific orders to associate with this customer.
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Apple" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let res = await cust1.save();
  console.log(res);
}

// ------------------ Function to Read Customer Data ------------------
/*
  Function: read
  - Purpose: Retrieve customer documents along with their associated orders.
  - Data Flow: Uses Mongoose's populate() to replace the ObjectId references in 'orders'
    with the actual Order documents, making it easier to work with the related data.
*/
async function read() {
  let res = await Customer.find({}).populate("orders");
  console.log(res[0]);
}

// ------------------ Function to Delete a Customer ------------------
/*
  Function: deleteCustomer
  - Purpose: Remove a customer from the database.
  - Data Flow:
      1. Finds and deletes a customer using findOneAndDelete.
      2. Triggers the post middleware defined in customerSchema.
      3. The middleware then deletes all orders referenced by that customer.
      4. This cascades the deletion and keeps the database consistent.
*/
async function deleteCustomer() {
  try {
    const deletedCustomer = await Customer.findOneAndDelete({ _id: '67a1c091cc87c77796f980ce' });
    if (!deletedCustomer) {
      console.log("Customer not found.");
      return;
    }
    console.log("Deleted Customer ", deletedCustomer);
  } catch (error) {
    console.error("Error deleting customer:", error);
  }
}

// Uncomment the necessary function calls to test each functionality
// addItems();
// addCustomer();
// read();
deleteCustomer();
