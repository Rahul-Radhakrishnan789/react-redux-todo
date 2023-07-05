import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    data:[]
}

const todoSlice = createSlice({
    name:'todo',
    initialState:INITIAL_STATE,
    reducers:{

        add:(state,action)=>{
            state.data = [...state.data,{id:Date.now(), name: action.payload.name}]
        
    },

        remove:(state,action) => {
            const id = action.payload.id;   // Extract the 'id' from the action payload
            state.data = state.data.filter((e)=> e.id!==id)
    },

       update:(state,action) => {
        const { id, name } = action.payload;
        state.data = state.data.map((e) => {
          if (e.id === id) {
            return { ...e, name };
          }
          return e;
        });
       },

}
   
})



export const {add,remove,update } =  todoSlice.actions

export default todoSlice.reducer