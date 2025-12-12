import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemSlice";
import fetchStatusReducer from "./fetchStatusSlice";
import bagReducer from "./bagSlice";


const myntraStore = configureStore({
  reducer: {
    items: itemsReducer,
    fetchStatus: fetchStatusReducer,
    bag: bagReducer,
  },
});


export default myntraStore;