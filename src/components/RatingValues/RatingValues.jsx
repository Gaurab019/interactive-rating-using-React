import React from "react";
import "./RatingValuesStyle.css";

function RatingValues({ value, setValue }) {
  // function RatingValues() {
  function clickRate(e) {
    const rateValue = e.target.innerHTML;
    const ratings = document.querySelectorAll(".ratingValue");
    ratings.forEach((element, i) => {
      element.classList.remove("currElemntHover");
      if (i <= rateValue - 1) {
        element.classList.add("currElemntHover");
      }
    });
    setValue(rateValue);
    console.log(rateValue);
  }

  return (
    <span className="ratingValue" onClick={clickRate}>
      {value}
    </span>
  );
}

export default RatingValues;
