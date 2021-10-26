//This file makes responsive stars so that when clicked it marks the star upto it
import React from "react";
import ReactStars from "react-rating-stars-component";
const Rating_Star = {
  size: 30,
  count: 5,
  isHalf: false,
  value: 4,
  color: "gray",
  activeColor: "yellow",
};
//import React from 'react'

export function Stars() {
  return (
    <div className="Stars">
      <ReactStars {...Rating_Star} />
    </div>
  );
}
