import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

// creating fake data using faker

// this method is for consistent values , not generate new values every time
faker.seed(50);

const products = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  img: `https://picsum.photos/seed/${faker.string.uuid()}/400/300`,
  inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  category: faker.commerce.department(),
  rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  qyt:1,
}));

console.log(products);

const initialState = {
  products: products,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
