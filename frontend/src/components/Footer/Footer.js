import React from 'react'
import home from "./Footer.module.css";
import logo from "../../images/Logo.png";
import linkedIn from "../../images/icons/linkedin.svg";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";
import twitter from "../../images/icons/twitter.svg";

export default function Footer() {
  return (
    
    <div className={home.footer}>
    <div>
      <img
        className={home.logoFooter}
        src={logo}
        alt="logo in the footer"
      ></img>
    </div>

    <div className={home.footerRow}>
      <div className={home.address}>
        <span className={home.businessAddress}>
          Level 17, PWC Building Commercial Bay Tower, 11-19 Customs Street
          West, Auckland CBD 1010, New Zealand
        </span>
        <span className={home.poBox}>
          P.O. Box 106500, Customs Street, AUCKLAND 1010, NEW ZEALAND
        </span>
      </div>
      <div className={home.newsletter}>
        <span className={home.subscribe}>Subscribe to our Newsletter</span>
        <input className={home.subscribeInput} placeholder="Email"></input>
        <button className={home.subscribebtn}>Subscribe</button>
      </div>
      <div className={home.contactBox}>
        <span className={home.contactInfo}>
          Phone: 09 391 4642 <br></br>International: +64 21 642 119{" "}
          <br></br>Email: info@metronz.co.nz
        </span>
        <div className={home.socialLinks}>
          <a href="https://www.linkedin.com/login" target="_blank">
            <img
              className={home.linkedIn}
              src={linkedIn}
              alt="LinkedIn link"
            ></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className={home.instagram}
              src={instagram}
              alt="instagram link"
            ></img>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className={home.facebook}
              src={facebook}
              alt="facebook link"
            ></img>
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <img
              className={home.twitter}
              src={twitter}
              alt="twitter link"
            ></img>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
