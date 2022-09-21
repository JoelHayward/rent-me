import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carry from "../../images/icons/carry.svg";
import calculator from "../../images/icons/calculator.svg";
import magHouse from "../../images/icons/magHouse.svg";
import houseHeartDocu from "../../images/icons/houseHeartDocu.svg";
import home from "./InfoCalc.module.css";


export default function InfoCalc() {
  let [firstNumber, setFirstNumber] = useState(0);
  let [secondNumber, setSecondNumber] = useState(0);
  let [thirdNumber, setThirdNumber] = useState(0);
  let [result, setResult] = useState(0);

  const changeFirstNumber = (e) => {
    setFirstNumber(+e.target.value);
  };

  const changeSecondNumber = (e) => {
    setSecondNumber(+e.target.value);
  };

  const changeThirdNumber = (e) => {
    setThirdNumber(+e.target.value);
  };

  useEffect(() => {
    setResult(firstNumber - secondNumber - thirdNumber);
  }, [firstNumber, secondNumber, thirdNumber, result]);

  return (
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
            <input
              className={home.inputField}
              type="number"
              value={firstNumber}
              step="any"
              onChange={(e) => changeFirstNumber(e)}
            ></input>
          </div>
          <span className={home.savingGoal}>
            Enter your weekly savings goal
          </span>
          <div className={home.inputExpenditure}>
            <span className={home.dollarSign}>$</span>
            <input
              className={home.inputField}
              type="number"
              value={secondNumber}
              step="any"
              onChange={(e) => changeSecondNumber(e)}
            ></input>
          </div>
          <span className={home.expenditure}>
            Enter your weekly expenditures
          </span>
          <div className={home.inputExpenditure}>
            <span className={home.dollarSign}>$</span>
            <input
              className={home.inputField}
              type="number"
              value={thirdNumber}
              step="any"
              onChange={(e) => changeThirdNumber(e)}
            ></input>
          </div>
          <span className={home.calcSubTitle}>Your Affordable Weekly Rent</span>
          <div className={home.calculateCost}>
            <span className={home.calcCost}>$</span>
            <span className={home.costOutcome}>{result}</span>
          </div>
          <div className={home.centerBtn}>
            <button className={home.calculateBtn}>
              Search Rental Property Listings
            </button>
          </div>
        </div>
      </div>
  )
}
