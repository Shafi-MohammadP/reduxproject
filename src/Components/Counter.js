import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {countIncrease,countDecrease} from '../Redux/Count/countSlice'
import { useDispatch } from 'react-redux'
function Counter() {
    const count = useSelector(state=> state.count.value)
    const dispatch = useDispatch()
    const increase =()=> {
        dispatch(countIncrease())
    }
    const decrease =()=> {
        dispatch(countDecrease())
    }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count} </h3>
      <button className='btns' onClick={increase}>Increase</button>
      <button className='btns' onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter