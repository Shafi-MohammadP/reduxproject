import { createSlice } from "@reduxjs/toolkit";


export const countSlice =  createSlice({
    name:"count",
    initialState:{
        value:555
    },
    reducers:{
        countIncrease:(state)=>{
            state.value += 1
        },
        countDecrease:(state) =>{
            state.value -=1
        }
    }
})

export const {countIncrease, countDecrease} = countSlice.actions

export default countSlice.reducer