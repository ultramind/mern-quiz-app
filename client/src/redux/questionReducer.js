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
      },
      moveNextQuestion: (state)=>{
         return {
            ...state,
            trace: state.trace + 1
         }
      },
      movePrevQuestion: (state)=>{
         return {
            ...state,
            trace: state.trace - 1
         }
      }
   }
})

export const {startQuiz, moveNextQuestion, movePrevQuestion} = questionReducer.actions;

export default questionReducer.reducer;