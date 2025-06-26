import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});