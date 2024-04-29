import { createSlice } from "@reduxjs/toolkit"; 

const answerReducer = createSlice({
   name:"answers",
   initialState: {
      userId: null,
      results:[]
   },

   // create reducers
   reducers: {
      setUserId: (state, action)=>{
         state.userId = action.payload
      }
   }
})

export const {setUserId} = answerReducer.actions;

export default answerReducer.reducer;