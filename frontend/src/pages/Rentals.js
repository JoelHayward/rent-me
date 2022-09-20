import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import classes from './Rentals.module.css';
import FilterBar from "../components/FilterBar/FilterBar";

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
  // console.log(typeof (results));
  // console.log(results.length);
  // console.log(results[0].name);

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

  // console.log(quickSort(results));

  return (
    <div className={classes.rentals}>
      <h1>rentals</h1>
      <Link to="/">Home</Link>
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
    </div>
  );
}
