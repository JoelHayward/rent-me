import React from "react";
import { Link } from "react-router-dom";
import rentals from "./Rentals";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={rentals}>Rentals</Link>
    </div>
  );
}
