import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './todoSlice' // importing todoslice in the name of todoReducer because it is exported by "default".

export  const store = configureStore({
    reducer:{
  todo:todoReducer
    }
})