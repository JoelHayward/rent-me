import React from "react";
import { Link } from "react-router-dom";
import classes from "./RentalsFooter.module.css";

function RentalsFooter() {
  return (
    <div className={classes.rentalsFooter}>
      <div className={classes.logoDiv}>
        <Link to="/">
          <img alt="logo" src="./images/Logo.png"></img>
        </Link>
      </div>
      <div className={classes.footerTextDiv}>
        <span>
          Tenancy Application powered by
          <a className={classes.poweredByAnchor} href="www.tenant.co.nz">
            {" "}
            <b>www.tenant.co.nz </b>
          </a>{" "}
          Copyright &copy; 2022
        </span>
        <br />
        <span>
          To view our privacy policy and see how we protect your data,
          <a className={classes.clickHereAnchor} href="www.tenant.co.nz">
            {" "}
            <b>click here</b>
          </a>
        </span>
      </div>
    </div>
  );
}

export default RentalsFooter;
