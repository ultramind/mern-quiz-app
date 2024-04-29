import {combineReducers, configureStore} from '@reduxjs/toolkit'
import questionReducer from './questionReducer'
import answerReducer from './answerReducer'

const rootReducer = combineReducers({
   questions:  questionReducer,
   answers: answerReducer
})

export default configureStore({reducer: rootReducer})