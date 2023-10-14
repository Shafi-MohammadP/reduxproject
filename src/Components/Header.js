import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'


function Header() {
    const color =useSelector(state=> state.color.value)
    const count = useSelector(state=> state.count.value)
  return (
    <div className="header">
      <h1  style={{color}}>REDUX Project  </h1>
      <h3 style={{color}} >count is : {count} </h3>
    </div>
  )
}

export default Header