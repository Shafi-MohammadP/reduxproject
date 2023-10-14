import React from "react";
import { useDispatch } from "react-redux";
import {change_color} from '../Redux/Color/colorSlice'
import randomColor from "randomcolor";
// import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Aside() {
    const color = useSelector(state => state.color.value)
    const dispatch = useDispatch()
    const newColor = randomColor()
    const changeColor =()=>{
        dispatch(change_color({
            color:newColor
        }))
    }
    return (
      <div className="aside">
        <h2 style={{color}}> Aside</h2>
        <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }
  
  export default Aside;
  