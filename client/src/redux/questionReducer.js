import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
   name:"question",
   initialState: {
      queue: [],
      answers: [],
      trace: 0
   },

   // reducers
   reducers: {
      startQuiz: (state, action)=>{
         return {
            ...state,
            queue: action.payload
         }
      }
   }
})

export const {startQuiz} = questionReducer.actions;

export default questionReducer.reducer;