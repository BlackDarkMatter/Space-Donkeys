import React from "react";

const BurritosForDelivery = () => {
  const submitForm = () => {
    console.info("Oh you submitted the form!");
  };

  return (
    <div className="align-on-center align-text-left">
      <div>
        <label htmlFor="name">What's your name:</label>
        <br />
        <input type="text" id="name" name="fname" />
        <br />
        <label htmlFor="restaurant">Where are you picking burritos from:</label>
        <br />
        <select id="restaurant" name="frestaurant">
          <option value=""></option>
        </select>
        <br />
        <label htmlFor="hour">Enter arrival time to the place:</label>
        <br />
        <input type="time" id="hour" name="fhour" />
        <br />
        <label htmlFor="close">Automatically close requests?</label>
        <br />
        <input type="checkbox" id="close" name="fclose" />
        <br />
        <label htmlFor="timeToClose">
          Close request on{" "}
          <input type="number" id="timeToClose" name="ftimeToClose" /> minutes
          before arrival time
        </label>
        <br />
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
};

export default BurritosForDelivery;
