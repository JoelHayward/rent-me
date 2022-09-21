import React from 'react'
import letters from "../../images/letters.png";
import home from "./ImgBanner.module.css";





export default function ImgBanner() {
  return (
    <div>
      <img className={home.letterImg} src={letters} alt="magnet letters"></img>
      </div>
  )
}
