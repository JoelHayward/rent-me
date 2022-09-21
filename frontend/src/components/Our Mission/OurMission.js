import React from 'react'
import family from "../../images/familyImg.png";
import home from "./OurMission.module.css";


export default function OurMission() {
  return (
    <div className={home.ourMission}>
        <div className={home.missionText}>
          <span className={home.happyTenants}>
            Happy Tenants is Our Mission
          </span>
          <span className={home.aboutUs}>
            At Metro NZ Property Management you’ll find that the type of
            property on offer is a notch above the norm. We pride ourselves on
            superior property value and tidiness. Where a property needs work or
            improvement, we’re in a good position to convince the owner that
            it’s worthwhile to invest and so you, the tenant as well as the
            property owner will benefit.
          </span>
          <span className={home.manyLocations}>
            We have properties all over New Zealand!
          </span>
        </div>
        <div className={home.missionImage}>
          <img className={home.familyImg} src={family} alt="happy family"></img>
        </div>
      </div>
      
  )
}
