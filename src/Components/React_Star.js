//This file makes responsive stars so that when clicked it marks the star upto it

import React from "react";
import "./React_Stars.css";
import ReactStars from "react-rating-stars-component";
const Rating_Star = {
  size: 40,
  count: 7,
  isHalf: false,
  value: 4,
  color: "blue",
  activeColor: "red",
};
//import React from 'react'

export function React_Stars() {

  return (
      <div className="App">
      <h1>Responsive rating</h1>
      <ReactStars {...Rating_Stars} />
    </div>
  )
}

