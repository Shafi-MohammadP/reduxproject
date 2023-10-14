import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './Color/colorSlice'
import countReducer from './Count/countSlice'

export default configureStore({
    reducer:{
        color:colorReducer,
        count : countReducer
    }
})