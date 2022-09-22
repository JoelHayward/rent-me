import React from 'react'
import { Link } from "react-router-dom";
import home from "./HeaderBar.module.css";
import logo from "../../images/Logo.png";



export default function HeaderBar() {
  return (
    <div><div className={home.navbar}>
    <img
      className={home.logo}
      src={logo}
      alt="metro property management logo"
    ></img>
    <div className={home.navbtns}>
      <Link style={{textDecoration: 'none'}} to="/">
        <div className={home.homebtn}>
          <span className={home.home}>Home</span>
        </div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/rentals">
        <div className={home.listingbtn}>
          <span className={home.listings}>Rental Listings</span>
        </div>
      </Link>
      <div className={home.ownerbtn}>
        <span className={home.owner}>Owner</span>
      </div>
      <div className={home.aboutbtn}>
        <span className={home.about}>About Us</span>
      </div>
      <div className={home.contactbtn}>
        <span className={home.contact}>Contact</span>
      </div>
    </div>
  </div></div>
  )
}
