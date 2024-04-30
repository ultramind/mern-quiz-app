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
      },
      pushResultAction: (state, action)=>{
         state.results.push(action.payload)
      }
   }
})

export const {setUserId, pushResultAction} = answerReducer.actions;

export default answerReducer.reducer;