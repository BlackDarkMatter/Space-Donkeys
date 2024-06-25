import React from "react";

const DonkeyOnDelivery = () => {
  return (
    <div className="align-on-center align-text-left">
      <form>
        <label for="name">What's your name:</label>
        <br />
        <input type="text" id="name" name="fname" />
        <br />
        <label for="restaurant">Where are you picking burritos from:</label>
        <br />
        <select id="restaurant" name="frestaurant">
          <option value=""></option>
        </select>
        <br />
        <label for="hour">Enter arrival time to the place:</label>
        <br />
        <input type="time" id="hour" name="fhour" />
        <br />
        <label for="close">Automatically close requests?</label>
        <br />
        <input type="checkbox" id="close" name="fclose" />
        <br />
        <label for="timeToClose">
          Close request on{" "}
          <input type="number" id="timeToClose" name="ftimeToClose" /> minutes
          before arrival time
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default DonkeyOnDelivery;
