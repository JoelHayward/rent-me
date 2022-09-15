import React, { useEffect, useState } from "react";

export default function Rentals() {
  const [listing, setListing] = useState([
    {
      _id: "",
      listing_url: "",
      name: "",
      summary: "",
      space: "",
      description: "",
      property_type: "",
      accommodates: "",
      bedrooms: "",
      beds: "",
      bathrooms: "",
      price: "",
    },
  ]);

  useEffect(() => {
    fetch("/Rentals")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setListing(jsonRes));
  });

  return (
    <div>
      <h1>rentals</h1>
      {listing.map((rental) => (
        <h1>{rental.name}</h1>
      ))}
    </div>
  );
}
