import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card} key={props.resultkey}>
      <div className={classes.imgDiv}>
        <img
          alt="property"
          className={classes.image}
          src={props.imageSource}
        ></img>
        <img
          alt="icon"
          iconuniqueid={props.iconuniqueid}
          className={classes.icon}
          src={props.iconSource}
          onClick={props.onFavour}
        ></img>
        <img
          alt="icon"
          className={classes.redIcon}
          src={props.redIconSource}
        ></img>
      </div>
      <div className={classes.details}>
        <div className={classes.address}>{props.address}</div>
        <div className={classes.price}>${props.price}</div>
        <hr className={classes.horizontalLine}></hr>
        <div className={classes.facilities}>
          <div className={classes.bedrooms}>{props.bedrooms} Bed</div>
          <div className={classes.bathrooms}>{props.bathrooms} Bath</div>
          <div className={classes.cars}>{props.cars} Car</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
