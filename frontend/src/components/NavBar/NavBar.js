import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar(props) {
  return (
    <div className={classes.navBar}>
      <div className={classes.logo}>
        <Link to="/">
          <img alt="logo" src="./images/Logo.png"></img>
        </Link>
      </div>
      <div className={classes.navigationMenu}>{props.children}</div>
    </div>
  );
}

export default NavBar;
