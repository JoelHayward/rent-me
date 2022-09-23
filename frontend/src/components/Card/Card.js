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
          // className={classes.icon + `${props.iconStyle}`}
          className={props.favoured ? classes.hideIcon : classes.displayIcon}
          src={props.iconSource}
          onClick={props.onFavour}
        ></img>
        <img
          iconuniqueid={props.iconuniqueid}
          alt="icon"
          // className={classes.redIcon}
          className={
            props.favoured ? classes.displayRedIcon : classes.hideRedIcon
          }
          src={props.redIconSource}
          onClick={props.onFavour}
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
