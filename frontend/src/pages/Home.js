import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import home from "./home.module.css";
import logo from "../images/Logo.png";
import hero from "../images/Hero.png";
import family from "../images/familyImg.png";
import workingTogether from "../images/workingTogether.png";
import letters from "../images/letters.png";
import carry from "../images/icons/carry.svg";
import calculator from "../images/icons/calculator.svg";
import magHouse from "../images/icons/magHouse.svg";
import houseHeartDocu from "../images/icons/houseHeartDocu.svg";
import downArrow from "../images/icons/downArrow.svg";
import linkedIn from "../images/icons/linkedin.svg";
import instagram from "../images/icons/instagram.svg";
import facebook from "../images/icons/facebook.svg";
import twitter from "../images/icons/twitter.svg";

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
        <div className={home.navbtns}>
          <div className={home.homebtn}>
            <span className={home.home}>Home</span>
          </div>
          <Link to="/rentals">
            <div className={home.listingbtn}>
              <span className={home.listings}>Rental Listings</span>
            </div>
          </Link>
          <div className={home.ownerbtn}>
            <span className={home.owner}>Owner</span>
          </div>
          <div className={home.aboutbtn}>
            <span className={home.about}>About Us</span>
          </div>
          <div className={home.contactbtn}>
            <span className={home.contact}>Contact</span>
          </div>
        </div>
      </div>

      {/* HERO BAR */}
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
      {/* SECTION TWO */}

      <div className={home.infoCalc}>
        <div className={home.siteInfo}>
          <div className={home.siteInfoIcons}>
            <img
              className={home.checkBoard}
              src={calculator}
              alt="Online calculator"
            ></img>
            <img
              className={home.magRedHouse}
              src={magHouse}
              alt="magnifyer and house"
            ></img>
            <img
              className={home.houseRedHeart}
              src={houseHeartDocu}
              alt="House with heart in it"
            ></img>
            <img
              className={home.menCarry}
              src={carry}
              alt="people carrying box"
            ></img>
          </div>
          <div className={home.siteInfoText}>
            <span className={home.onlineCalcInfo}>
              Discover the weekly rent that meets your goals using our online
              calculator --
            </span>
            <Link to="/rentals" className={home.searchHomes}>
              Search our rental property listings
              <span className={home.searchRentals}>
                {" "}
                to find your ideal home
              </span>
            </Link>
            <span className={home.shareFavourites}>
              Share your favourites with us to discuss, or book a viewing, all
              online!
            </span>
            <span className={home.agreements}>
              Sign your tenancy agreement and enjoy your new home!
            </span>
          </div>
        </div>
        <div className={home.calculator}>
          <div>
            <span className={home.calcTitle}>Make Your Dreams Happen</span>
          </div>
          <span className={home.netIncome}>Enter your weekly net income</span>
          <div className={home.inputExpenditure}>
            <span className={home.dollarSign}>$</span>
            <input className={home.inputField} type="number"></input>
          </div>
          <span className={home.savingGoal}>
            Enter your weekly savings goal
          </span>
          <div className={home.inputExpenditure}>
            <span className={home.dollarSign}>$</span>
            <input className={home.inputField} type="number"></input>
          </div>
          <span className={home.expenditure}>
            Enter your weekly expenditures
          </span>
          <div className={home.inputExpenditure}>
            <span className={home.dollarSign}>$</span>
            <input className={home.inputField} type="number"></input>
          </div>
          <span className={home.calcSubTitle}>Your Affordable Weekly Rent</span>
          <div className={home.calculateCost}>
            <span className={home.calcCost}>$</span>
            <span className={home.costOutcome} readOnly />
          </div>
          <div className={home.centerBtn}>
            <button className={home.calculateBtn}>
              Search Rental Property Listings
            </button>
          </div>
        </div>
      </div>

      {/* OUR MISSION SECTION THREE*/}
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
      {/* WORKING WITH US SECTION FOUR  */}
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
      {/* TENANT SUPPORT SECTION FIVE */}
      <div className={home.support}>
        <span className={home.tenantSupport}>Tenant Support</span>
        <span className={home.onCall}>
          Call on us whenever you need support with any issues that arise during
          your tenancy. With many years of property management experience and
          our award-winning attitude, you’re in safe hands.<br></br>
        </span>
        <div>
          <span className={home.seeYourself}>See for yourself</span>
          <img
            className={home.seeBelow}
            src={downArrow}
            alt="arrow pointing down"
          ></img>
        </div>
      </div>
      {/* TESTIMONIALS */}

      <div className={home.testimonials}>
        <span className={home.othersSay}>See What Others Have to Say</span>
        <div className={home.testimonialControl}>
          <div className={home.testimonialOne}>
            <div className={home.testImgOne}></div>
            <span className={home.testOneName}>
              <span className={home.testOneLocation}>Name</span>
              City, Country
            </span>
            <div className={home.testOneLine}></div>
            <span className={home.testOneQuote}>
              “Quote, ergawgsrbse. wegv awegfsghthdth herhdbths srehsrth
              drthsrthsrhsrjh ihrgj odrgjk ishg ohrlghbiusnrugnldg i;hsgl g s”
            </span>
          </div>

          <div className={home.testimonialTwo}>
            <div className={home.testImgTwo}></div>
            <span className={home.testTwoName}>
              <span className={home.testTwoLocation}>Name</span>
              City, Country
            </span>
            <div className={home.testTwoLine}></div>
            <span className={home.testTwoQuote}>
              “Quote, ergawgsrbse. wegv awegfsghthdth herhdbths srehsrth
              drthsrthsrhsrjh ihrgj odrgjk ishg ohrlghbiusnrugnldg i;hsgl g s”
            </span>
          </div>
          <div className={home.testimonialThree}>
            <div className={home.testImgThree}></div>
            <span className={home.testThreeName}>
              <span className={home.testThreeLocation}>Name</span>
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
      {/* SECTION SIX - BREAK IMAGE */}

      <img className={home.letterImg} src={letters} alt="magnet letters"></img>
      {/* CONTACT SECTION SEVEN */}

      <div className={home.contact}>
        <span className={home.callUs}>
          Still can’t find what you’re looking for? Give us a call on
          <span className={home.phoneNumber}>+64 9 391 4642</span>
        </span>
        <span className={home.weSpeak}>
          We speak: English, Hungarian, Chinese, Japanese, Persian, Korean, Kiwi
        </span>
      </div>
      {/* FOOTER - SECTION EIGHT */}

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
            <input className={home.subscribeInput} placeholder='Email'></input>
            <button className={home.subscribebtn}>Subscribe</button>
          </div>
          <div className={home.contactBox}>
            <span className={home.contactInfo}>
              Phone: 09 391 4642 <br></br>International: +64 21 642 119 <br></br>Email:
              info@metronz.co.nz
            </span>
            <div className={home.socialLinks}>
              <a href="https://www.linkedin.com/login"target="_blank">
              <img className={home.linkedIn} src={linkedIn} alt="LinkedIn link"></img>
              </a>
              <a href="https://www.instagram.com/"target="_blank">
              <img className={home.instagram} src={instagram} alt="instagram link"></img>
              </a>
              <a href="https://www.facebook.com/"target="_blank">
              <img className={home.facebook} src={facebook} alt="facebook link"></img>
              </a>
              <a href="https://twitter.com/home"target="_blank">
              <img className={home.twitter} src={twitter} alt="twitter link"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
