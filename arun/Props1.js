import React from 'react'
import './props1.css'

function Props1(props) {
    
  return (
     
      <div className='bike'>
      <img src={props.obj.image} alt="" />
      <h1>BikeName:{props.obj.name}</h1>
      <h2>Year:{props.obj.year}</h2>
      <h1>Price:{props.obj.price}</h1>
    
    </div>
  )
}

export default Props1