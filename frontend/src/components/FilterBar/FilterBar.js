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

function FilterBar() {
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} textAlign="center">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="left"
            >
              Location
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="Name"
                onChange={handleChangeName}
              >
                <MenuItem value={10}>House</MenuItem>
                <MenuItem value={20}>Appartment</MenuItem>
                <MenuItem value={30}>Townhouse</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">District</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="District"
                onChange={handleChangeDistrict}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Suburb</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={suburb}
                label="Suburb"
                onChange={handleChangeSuburb}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="left"
            >
              Rent per Week
            </Typography>
            <Box sx={{ m: 2, width: 750 }}>
              <Slider
                getAriaLabel={() => "Rent perWeek"}
                value={value}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>

            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign="left"
              >
                Property Type
              </Typography>
              <Stack spacing={4} direction="row" sx={{ ml: 8 }}>
                <Button
                  variant="outlined"
                  onClick={() => setFilter([...filter, "House"])}
                >
                  House
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setFilter([...filter, "Townhouse"])}
                >
                  Townhouse
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setFilter([...filter, "Apartment"])}
                >
                  Apartment
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setFilter([...filter, "Unit"])}
                >
                  Unit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setFilter([...filter, "Section"])}
                >
                  Section
                </Button>
              </Stack>
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Box sx={{ m: 5 }}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  textAlign="left"
                >
                  Bedrooms
                </Typography>
                <Stack spacing={1} direction="row">
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "1 Bedrooms"])}
                  >
                    1
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "2 Bedrooms"])}
                  >
                    2
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "3 Bedrooms"])}
                  >
                    3
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "4 Bedrooms"])}
                  >
                    
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "5+ Bedrooms"])}
                  >
                    5+
                  </Button>
                </Stack>
              </Box>

              <Box sx={{ m: 5 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Off-street Carparks
                </Typography>
                <Stack spacing={1} direction="row">
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "1 Carpark"])}
                  >
                    1
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "2 Carpark"])}
                  >
                    2
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "3+ Carpark"])}
                  >
                    3+
                  </Button>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Box sx={{ m: 5 }}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  textAlign="left"
                >
                  Bathrooms
                </Typography>
                <Stack spacing={1} direction="row">
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "1 Bathroom"])}
                  >
                    1
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "2 Bathroom"])}
                  >
                    2
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "3 Bathroom"])}
                  >
                    3
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "4 Bathroom"])}
                  >
                    4
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setFilter([...filter, "5+ Bathroom"])}
                  >
                    5+
                  </Button>
                </Stack>
              </Box>

              <Box sx={{ mt: 9 }}>
                <Stack spacing={1} direction="row">
                  <Button
                    variant="outlined"
                    style={{ fontSize: "10px" }}
                    onClick={() => setFilter([...filter, "Furnished"])}
                  >
                    Furnished
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ fontSize: "10px" }}
                    onClick={() => setFilter([...filter, "Pets Allowed"])}
                  >
                    Pets Allowed
                  </Button>
                  <Button
                    variant="outlined"
                    style={{ fontSize: "10px" }}
                    onClick={() => setFilter([...filter, "Available Now"])}
                  >
                    Available Now
                  </Button>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Box justifyContent="flex-start">
                <Stack spacing={4} direction="row" sx={{ ml: 8 }}>
                  <Button variant="text" onClick={handleClose}>
                    Close
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ display: "inline-flex", ml: 50 }}>
                <Box>
                  <Stack>
                    <Button variant="text" onClick={clearFilter}>
                      Reset Filters
                    </Button>
                  </Stack>
                </Box>
                <Box>
                  <Stack>
                    <Button variant="outlined">Search</Button>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
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
          <div className={classes.counter}>3</div>
        </div>
        Favourites
      </div>
    </div>
  );
}

export default FilterBar;
