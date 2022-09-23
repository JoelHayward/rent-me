import React, { useState } from "react";
import classes from "./FilterBar.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
// import { grey } from '@mui/material/colors';

// const primary = grey[900]; // #212121
// const accent = grey['A100']; // #f5f5f5

// SLIDE FOR PRICE
function valuetext(value) {
  return `$ ${value}`;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const selectedItems = [{}]

function FilterBar(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = React.useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [district, setDistrict] = React.useState("");
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };

  const [suburb, setSuburb] = React.useState("");
  const handleChangeSuburb = (event) => {
    setSuburb(event.target.value);
  };

  // PRICE SLIDER
  const [value, setValue] = React.useState([0, 800]);
  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };


  //SET FILTER
  const [filter, setFilter] = useState([]);

  console.log(filter);

  function clearFilter() {
    filter.length = 0;
    console.log(filter);
  }

  return (
    <div className={classes.filterBar}>
      <div className={classes.filter}>
        <button className={classes.filterButtonDiv} onClick={handleOpen}>
          <img alt="filter button" src="./images/filter.png"></img>Filters
        </button>
      </div>
      <div className={classes.filteredByListDiv}>
        <ul className={classes.selectedList}>
          {filter.map((item) => (
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
