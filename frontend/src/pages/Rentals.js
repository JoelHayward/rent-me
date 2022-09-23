import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import classes from "./Rentals.module.css";
import FilterBar from "../components/FilterBar/FilterBar";
import NavBar from "../components/NavBar/NavBar";
import RentalsFooter from "../components/ListingsFooter/RentalsFooter";

export default function Rentals() {
  const [results, setResults] = useState([]);

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
  console.log(results);
  console.log(typeof (results));
  // console.log(results.length);
  // console.log(results[0].name);

  // const numberArray = [4, 7, 1, 8, 90, 5, 30, 10, 3];
  // const stringArray = [
  //   "auckland",
  //   "christchurch",
  //   "wellington",
  //   "amman",
  //   "dubai",
  //   "mombasa",
  //   "sydney",
  //   "melbourne",
  //   "ajman",
  //   "barcelona",
  //   "cape town",
  //   "alfama",
  //   "las vegas",
  //   "cape verde",
  //   "taipei",
  //   "algorve",
  //   "lisboa",
  // ];
  // const objectArray = [
  //   {
  //     id: 1,
  //     country: "New Zealand",
  //     capital: "wellington",
  //   },
  //   {
  //     id: 2,
  //     country: "Australia",
  //     capital: "sydney",
  //   },
  //   {
  //     id: 3,
  //     country: "Spain",
  //     capital: "Madrid",
  //   },
  //   {
  //     id: 4,
  //     country: "Italy",
  //     capital: "Rome",
  //   },
  //   {
  //     id: 5,
  //     country: "France",
  //     capital: "Paris",
  //   },
  //   {
  //     id: 6,
  //     country: "South Africa",
  //     capital: "Cape Town",
  //   },
  //   {
  //     id: 7,
  //     country: "Taiwan",
  //     capital: "Taipei",
  //   },
  //   {
  //     id: 8,
  //     country: "Egypt",
  //     capital: "Cairo",
  //   },
  //   {
  //     id: 9,
  //     country: "Algeria",
  //     capital: "Algiers",
  //   },
  //   {
  //     id: 10,
  //     country: "Jordan",
  //     capital: "amman",
  //   },
  // ];

  // Use Quick Sort on the fetched properties array
  // const quickSort = (array) => {
  //   if (array.length === 1) {
  //     return array;
  //   }
  //   const pivot = array[array.length - 1];
  //   const leftArr = [];
  //   const rightArr = [];

  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (array[i] < pivot) {
  //       leftArr.push(array[i]);
  //     } else {
  //       rightArr.push(array[i]);
  //     }
  //   }

  //   if (leftArr.length > 0 && rightArr.length > 0) {
  //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  //   } else if (leftArr.length > 0) {
  //     return [...quickSort(leftArr), pivot];
  //   } else {
  //     return [pivot, ...quickSort(rightArr)];
  //   }
  // };

  // Customised to sort the objectArray on country - working!
  // const quickSort = (array) => {
  //   if (array.length === 1) {
  //     return array;
  //   }
  //   const pivot = array[array.length - 1];
  //   const pivotValue = pivot.country;
  //   const leftArr = [];
  //   const rightArr = [];

  //   for (let i = 0; i < array.length - 1; i++) {
  //     const arrayValue = array[i].country;
  //     if (arrayValue < pivotValue) {
  //       leftArr.push(array[i]);
  //     } else {
  //       rightArr.push(array[i]);
  //     }
  //   }

  //   if (leftArr.length > 0 && rightArr.length > 0) {
  //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  //   } else if (leftArr.length > 0) {
  //     return [...quickSort(leftArr), pivot];
  //   } else {
  //     return [pivot, ...quickSort(rightArr)];
  //   }
  // };






  // const quickSort = (array) => {
  //   if (array.length == 1) {
  //     return array;
  //   }
  //   const pivot = array[array.length - 1];
  //   const pivotValue = array.name;
  //   const leftArr = [];
  //   const rightArr = [];

  //   for (let i = 0; i < array.length - 1; i++) {
  //     const arrayValue = array[i].name;
  //     if (arrayValue < pivotValue) {
  //       leftArr.push(array[i]);
  //     } else {
  //       rightArr.push(array[i]);
  //     }
  //   }

  //   if (leftArr.length > 0 && rightArr.length > 0) {
  //     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  //   } else if (leftArr.length > 0) {
  //     return [...quickSort(leftArr), pivot];
  //   } else {
  //     return [pivot, ...quickSort(rightArr)];
  //   }
  // };


  // console.log(quickSort(results));
  // console.log(quickSort(numberArray));
  // console.log(quickSort(stringArray));
  // console.log(quickSort(objectArray));

  return (
    <div className={classes.rentals}>
      {/* <h1>rentals</h1> */}
      <NavBar>
        {/* <NavigationMenu></NavigationMenu> */}
        <h1>Rental Property Listings</h1>
      </NavBar>
      {/* <Link to="/">Home</Link> */}
      <FilterBar></FilterBar>
      <div className={classes.contentDiv}>
        {results &&
          results.map((result, index) => (
            // <div key={`${result._id}-${result.name}`} className="lisitng-title">
            //   <div>
            //     <img
            //       className="student_avatar"
            //       src={result.images.picture_url}
            //       alt="Student Avatar"
            //     />
            //   </div>
            //   <div>{result.name}</div>
            //   <div className="listing-summary">{result.summary}</div>
            //   {/* <div className="listing-price">{result.price}</div> */}
            // </div>
            <Card
              key={`${result._id}-${result.name}`}
              imageSource={result.images.picture_url}
              iconSource="images/heart_icon.png"
              redIconSource="images/heart_icon_red.png"
              address={`${result.address.street}, ${result.address.suburb}, ${result.address.country_code}`}
              price={result.price.$numberDecimal}
              bedrooms={result.bedrooms}
              bathrooms={parseInt(result.bathrooms.$numberDecimal)}
            ></Card>
          ))}
      </div>
      <RentalsFooter></RentalsFooter>
    </div>
  );
}
