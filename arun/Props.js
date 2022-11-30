import React from 'react'
import Props1 from './Props1'
import './props.css'
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import image5 from "./images/image5.jpg"
import image6 from "./images/image6.jpg"
import image7 from "./images/image7.jpg"
import image8 from "./images/image8.jpg"
 

export default function Props() {
  const products = [
    { image: image3, name: "NS250", year: "2021", price: "190000", value: 0 },
    { image: image4, name: "RC390", year: "2022", price: "250000", value: 1 },
    { image: image5, name: "GT650", year: "2019", price: "340000", value: 2 },
    { image: image6, name: "Duke", year: "2021", price: "190000", value: 0 },
    { image: image7, name: "Pulser220", year: "2022", price: "250000", value: 1 },
    { image: image8, name: "Gixer", year: "2019", price: "340000", value: 2 },
  ];


  return (

    <div className="bike1">
    {products.map((data) => (
      <Props1 obj={data} key={data.value} />
    ))}
  </div>
  )
}
