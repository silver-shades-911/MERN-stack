const mongoose = require("./DBsetup");

// Order schema
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

// Order Model
const Order = mongoose.model("Order", orderSchema);

// Customer schema
const customerSchema = new mongoose.Schema({
  Name: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

// Define the post middleware for findOneAndDelete
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

// Customer Model
const Customer = mongoose.model("Customer", customerSchema);

// Function to add items
async function addItems() {
  let result = await Order.insertMany([
    { item: "Chips", price: 10 },
    { item: "Apple", price: 30 },
    { item: "Choclate", price: 100 },
  ]);

  console.log(result);
}

// Function to add a customer
async function addCustomer() {
  let cust1 = new Customer({
    Name: "Stevan Stone",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Apple" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let res = await cust1.save();
  console.log(res);
}

// Function to read documents with populate
async function read() {
  let res = await Customer.find({}).populate("orders");
  console.log(res[0]);
}

// Function to delete a customer
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

// Uncomment the necessary function calls
// addItems();
// addCustomer();
// read();
deleteCustomer();
