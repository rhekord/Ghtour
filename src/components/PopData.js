import React from 'react'
import "./Popsites.css"


function PopData(props) {
  return (
    <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="site"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default PopData;
