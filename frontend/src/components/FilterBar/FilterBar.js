import React from "react";
import classes from "./FilterBar.module.css";

const selectedItems = [
  "rent Any to Any",
  "any Bed",
  "any Bath",
  "any Car",
  "Pets Allowed",
];

function FilterBar(props) {
  return (
    <div className={classes.filterBar}>
      <div className={classes.filter}>
        <button className={classes.filterButtonDiv}>
          <img alt="filter button" src="./images/filter.png"></img>Filters
        </button>
      </div>
      <div className={classes.filteredByListDiv}>
        <ul className={classes.selectedList}>
          {selectedItems.map((item) => (
            <li key={item}>
              <div className={classes.listItemDiv}>
                <button className={classes.selectedButton}>{item}</button>
                <div className={classes.xDiv}>+</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.favourites}>
        <div className={classes.heartCounterDiv}>
          <img
            alt="heart counter counts likes"
            src="./images/heart_icon_red.png"
          ></img>
          <div className={classes.counter}>{props.count}</div>
        </div>
        Favourites
      </div>
    </div>
  );
}

export default FilterBar;
