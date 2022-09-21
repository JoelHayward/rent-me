import React from 'react'
import workingTogether from "../../images/workingTogether.png";
import home from "./WorkingClosely.module.css";




export default function WorkingClosely() {
  return (
    <div className={home.workingClosely}>
        <div className={home.workingTogether}>
          <img
            className={home.workingCloselyImg}
            src={workingTogether}
            alt="Girls working together"
          ></img>
        </div>
        <div className={home.workingCloselyText}>
          <span className={home.workingWithYou}>Working Closely with You</span>
          <span className={home.atHome}>
            We place high importance on finding a property for you that you will
            feel fully at home in, and that you will want to stay in for a long
            time.
          </span>
          <span className={home.atHome}>
            We do everything that makes the process of changing properties and
            moving easy, whether you are looking for a property in New Zealand
            or elsewhere.
          </span>
          <span className={home.atHome}>
            We assist you with the tenancy application, finding the right
            property, the move and any issues that may arise during your
            tenancy.
          </span>
          <span className={home.loveIt}>
            We understand that you are not renting a building – you are renting
            a home.
          </span>
        </div>
      </div>
  )
}
