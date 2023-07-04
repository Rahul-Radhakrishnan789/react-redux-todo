import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    todo:[]
}

const todoSlice = createSlice({
    name:'todo',
    initialState:INITIAL_STATE,
   
})