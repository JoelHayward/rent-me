import React from 'react'
import downArrow from "../../images/icons/downArrow.svg";
import home from "./TenantSupport.module.css";


export default function TenantSupport() {
  return (
    <div className={home.support}>
        <span className={home.tenantSupport}>Tenant Support</span>
        <span className={home.onCall}>
          Call on us whenever you need support with any issues that arise during
          your tenancy. With many years of property management experience and
          our award-winning attitude, you’re in safe hands.<br></br>
          <div className={home.arrowAdjust}>
          <span className={home.seeYourself}>See for yourself</span>
          <img
            className={home.seeBelow}
            src={downArrow}
            alt="arrow pointing down"
          ></img>
        </div>
        
        </span>
        
      </div>
  )
}
