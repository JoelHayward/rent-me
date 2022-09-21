import React from 'react'
import home from "./HeroBar.module.css";
import hero from "../../images/Hero.png";


export default function HeroBar() {
  return (
    
    <div>
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
  )
}
