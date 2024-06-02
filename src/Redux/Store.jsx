import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer, //use this cart name while using useSelector
  },
});

export default store;
