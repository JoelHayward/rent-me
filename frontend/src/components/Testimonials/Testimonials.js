import React from 'react'
import home from "./Testimonials.module.css";
import testOne from '../../images/testimonialOne.png'
import testTwo from '../../images/testimonialTwo.png'
import testThree from '../../images/testimonialThree.png'


export default function Testimonials() {
  return (
   
    <div className={home.testimonials}>
    <span className={home.othersSay}>See What Others Have to Say</span>
    <div className={home.testimonialControl}>
      <div className={home.testimonialOne}>
        <img className={home.testImgOne} src={testOne} alt="guy testimonial"></img>
        <span className={home.testOneName}>
          <span className={home.testOneLocation}>Name</span><br></br>
          City, Country
        </span>
        <div className={home.testOneLine}></div>
        <span className={home.testOneQuote}>
          “Quote, ergawgsrbse. wegv awegfsghthdth herhdbths srehsrth
          drthsrthsrhsrjh ihrgj odrgjk ishg ohrlghbiusnrugnldg i;hsgl g s”
        </span>
      </div>

      <div className={home.testimonialTwo}>
        <img className={home.testImgTwo} src={testTwo} alt="guy testimonial"></img>
        <span className={home.testTwoName}>
          <span className={home.testTwoLocation}>Name</span><br></br>
          City, Country
        </span>
        <div className={home.testTwoLine}></div>
        <span className={home.testTwoQuote}>
          “Quote, ergawgsrbse. wegv awegfsghthdth herhdbths srehsrth
          drthsrthsrhsrjh ihrgj odrgjk ishg ohrlghbiusnrugnldg i;hsgl g s”
        </span>
      </div>
      <div className={home.testimonialThree}>
        <img className={home.testImgThree} src={testThree} alt="woman testimonial"></img>
        <span className={home.testThreeName}>
          <span className={home.testThreeLocation}>Name</span><br></br>
          City, Country
        </span>
        <div className={home.testThreeLine}></div>
        <span className={home.testThreeQuote}>
          “Quote, ergawgsrbse. wegv awegfsghthdth herhdbths srehsrth
          drthsrthsrhsrjh ihrgj odrgjk ishg ohrlghbiusnrugnldg i;hsgl g s”
        </span>
      </div>
    </div>
  </div>
  )
}
