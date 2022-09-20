import React from "react";
import classes from "./FilterBar.module.css";

const selectedItems = [
  "rent Any to Any",
  "any Bed",
  "any Bath",
  "any Car",
  "Pets Allowed",
];

function FilterBar() {
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
            <li>
              <div className={classes.listItemDiv}>
                <button className={classes.selectedButton}>{item}</button>
                <div className={classes.xDiv}>+</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.favourites}>Favourites</div>
    </div>
  );
}

export default FilterBar;
