import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.img} alt="" className="img" />
      <div className="data">
        <h4>{props.name}</h4>
        <span className="text">Rating : {props.rating}/5</span>
        <p className="text">Price : {props.price} $</p>
      </div>
      <button>View More</button>
    </div>
  );
};

export default Card;
