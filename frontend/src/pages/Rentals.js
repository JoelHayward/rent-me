import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import classes from "./Rentals.module.css";
import FilterBar from "../components/FilterBar/FilterBar";
import NavBar from "../components/NavBar/NavBar";
import RentalsFooter from "../components/ListingsFooter/RentalsFooter";

export default function Rentals() {
   const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);


  const handleFavour = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      console.log('clicked');
      console.log(e.target.getAttribute('iconuniqueid'));
      // setFavourites(favourites.push(e.target.getAttribute('iconuniqueid')));
      setFavourites([...favourites, e.target.getAttribute('iconuniqueid')]);
      console.log(favourites);
    }
    // console.log('clicked');
  };
  // console.log(favourites);

  useEffect(
    () =>
      async function req() {
        await fetch("http://localhost:8080/rentals")
          .then((response) => response.json())
          .then((res) => {
            setResults(res);
          });
      },
    []
  );
  const handleFavour = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
      const iconID = e.target.getAttribute("iconuniqueid");
      console.log(iconID);
      if (favourites.includes(iconID)) {
        favourites.splice(favourites.indexOf(iconID), 1);
      } else {
        setFavourites([...favourites, iconID]);
      }
    }
  };
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [unfavourites, setUnfavourites] = useState([]);

  // console.log(results);
  // console.log(typeof (results));
  // console.log(results.length);
  // console.log(results[0].name);

  const numberArray = [4, 7, 1, 8, 90, 5, 30, 10, 3];
  const stringArray = [
    "auckland",
    "christchurch",
    "wellington",
    "amman",
    "dubai",
    "mombasa",
    "sydney",
    "melbourne",
    "ajman",
    "barcelona",
    "cape town",
    "alfama",
    "las vegas",
    "cape verde",
    "taipei",
    "algorve",
    "lisboa",
  ];
  const objectArray = [
    {
      id: 1,
      country: "New Zealand",
      capital: "wellington",
    },
    {
      id: 2,
      country: "Australia",
      capital: "sydney",
    },
    {
      id: 3,
      country: "Spain",
      capital: "Madrid",
    },
    {
      id: 4,
      country: "Italy",
      capital: "Rome",
    },
    {
      id: 5,
      country: "France",
      capital: "Paris",
    },
    {
      id: 6,
      country: "South Africa",
      capital: "Cape Town",
    },
    {
      id: 7,
      country: "Taiwan",
      capital: "Taipei",
    },
    {
      id: 8,
      country: "Egypt",
      capital: "Cairo",
    },
    {
      id: 9,
      country: "Algeria",
      capital: "Algiers",
    },
    {
      id: 10,
      country: "Jordan",
      capital: "amman",
    },
  ];

  // QUICK SORT FUNCTION

  const quickSort = (array) => {
    if (array.length === 1) {
      return array;
    }
    const pivot = array[array.length - 1];
    const pivotValue = pivot.capital;
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++) {
      const arrayValue = array[i].capital;
      if (arrayValue < pivotValue) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
      return [...quickSort(leftArr), pivot];
    } else {
      return [pivot, ...quickSort(rightArr)];
    }
  };

  // console.log(quickSort(results));
  // console.log(quickSort(numberArray));
  // console.log(quickSort(stringArray));
  console.log(quickSort(objectArray));




  
  return (
    <div className={classes.rentals}>
      {/* <h1>rentals</h1> */}
      <NavBar>
        {/* <NavigationMenu></NavigationMenu> */}
        <h1>Rental Property Listings</h1>
      </NavBar>
      {/* <Link to="/">Home</Link> */}
      <FilterBar count={favourites.length}></FilterBar>
      <div className={classes.contentDiv}>
        {results &&
          results.map((result, index) => (
            <Card
              key={`${result._id}-${result.name}`}
              iconuniqueid={`${result._id}`}
              imageSource={result.images.picture_url}
              iconSource="images/heart_icon.png"
              redIconSource="images/heart_icon_red.png"
              address={`${result.address.street}, ${result.address.suburb}, ${result.address.country_code}`}
              price={result.price.$numberDecimal}
              bedrooms={result.bedrooms}
              bathrooms={parseInt(result.bathrooms.$numberDecimal)}
              onFavour={handleFavour}
              // onUnFavour={handleUnFavour}
              favoured={favourites.includes(result._id)}
            ></Card>
          ))}
      </div>
      <RentalsFooter></RentalsFooter>
    </div>
  );
}
