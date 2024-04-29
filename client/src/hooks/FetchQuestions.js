import { useEffect, useState } from "react"
import data from "../database/data"
import { useDispatch } from "react-redux"
import * as Action from '../redux/questionReducer'

export const useFetchQuestions = ()=>{
   const [getData, setGetData] = useState({isLoading: false, apiData:[], serverError:null})
   const dispatch = useDispatch()

   useEffect(() => {
      setGetData(prev=> ({...prev, isLoading:true}));
      (async ()=>{
         try {
            const questions = await data;
            if (questions.length > 0) {
               setGetData(prev=> ({...prev, isLoading:false}))
               setGetData(prev=> ({...prev, apiData:questions}))

               // dispatch data
               dispatch(Action.startQuiz(questions))
            }else{
               throw new Error("No questions available now.")
            }
         } catch (error) {
            setGetData(prev=> ({...prev, isLoading:false}))
            setGetData(prev=> ({...prev, serveError:error}))
         }
      })()
   }, [dispatch])

   return [getData, setGetData]
}

// moveNextQuestion

const moveNextQuestion = ()=> async (dispatch) => {
   try {
      dispatch(Action.moveNextQuestion())
   } catch (error) {
    console.log(error)  
   }
}

// MovePreQuestion
const movePrevQuestion = ()=> async (dispatch) => {
   try {
      dispatch(Action.movePrevQuestion())
   } catch (error) {
    console.log(error)  
   }
}