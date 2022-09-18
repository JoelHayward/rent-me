import React from "react";
import { Link } from "react-router-dom";
import home from "./home.module.css";
import logo from "../images/Logo.png";
import hero from "../images/Hero.png";

export default function Home() {
  return (
    <div className={home.homePage}>
      {/* Navbar */}
      <div className={home.navbar}>
        <img
          className={home.logo}
          src={logo}
          alt="metro property management logo"
        ></img>
        <div className={home.homebtn}>
          <span className={home.home}>Home</span>
        </div>
        <Link to="/rentals">
        <div className={home.listingbtn}>
          <span class={home.listings}>Rental Listings</span>
        </div>
        </Link>
        <div class={home.ownerbtn}>
          <span className={home.owner}>Owner</span>
        </div>
        <div className={home.aboutbtn}>
          <span className={home.about}>About Us</span>
        </div>
        <div className={home.contactbtn}>
          <span className={home.contact}>Contact</span>
        </div>
      </div>

      {/* HERO BAR */}
      <div className={home.heroBox}>
        <img
          className={home.herobar}
          src={hero}
          alt="auckland city skyline"
        ></img>
        
        <div className={home.customerbtns}>
          <div className={home.tenantbtn}>
            <span className={home.tenant}>Tenant</span>
          </div>
          <div className={home.ownersbtn}>
            <span className={home.owners}>Owner</span>
          </div>
        </div>
        {/* <div className={home.searchbar}> */}
          <input
            className={home.search}
            placeholder="Search Tenant Info"
          ></input>
        {/* </div> */}
      </div>
    </div>
  );
}
