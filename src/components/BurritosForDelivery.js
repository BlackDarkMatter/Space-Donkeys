import React, { useRef, useState } from "react";
import { DeliveryService } from "../services/DeliveryService";

const BurritosForDelivery = ({ currentUser, restaurantList }) => {
  const [delivery, setDelivery] = useState({
    user: currentUser.username,
    restaurant: "0",
    hour: "",
    close: false,
  });

  const submitForm = () => {
    let errorMessage = "";
    if (delivery.restaurant === "0") {
      errorMessage += "Please pick a restaurant\n";
    }
    if (delivery.hour === "") {
      errorMessage += "Please set a time limit to make orders";
    }
    if (errorMessage.length === 0) {
      DeliveryService.saveDeliveryList([delivery]);
      window.alert("Success! Now you can receive orders!");
      setDelivery({
        user: currentUser.username,
        restaurant: "0",
        hour: "",
        close: false,
      });
    } else {
      window.alert(errorMessage);
    }
  };

  let closeRequestsHour = useRef(null);

  const updateDeliveryData = (prop, data) => {
    let newData = { ...delivery };
    newData[prop] = data;
    setDelivery(newData);
  };

  const canOrder = () => {
    let can = "yes";
    if (delivery.close && didTimePassedLimit()) {
      can = "no";
    }
    window.alert(can);
  };

  const didTimePassedLimit = () => {
    let currentDate = new Date();
    let limitTime = new Date();
    let splitedTime = closeRequestsHour.current.split(":");
    limitTime.setHours(splitedTime[0], splitedTime[1]);

    return currentDate.getTime() > limitTime.getTime();
  };

  return (
    <div className="align-on-center align-text-left">
      <div>
        <label htmlFor="restaurant">Where are you picking burritos from:</label>
        <br />
        <select
          id="restaurant"
          name="frestaurant"
          defaultValue={delivery.restaurant}
          onChange={(e) => updateDeliveryData("restaurant", e.target.value)}
        >
          <option value="0">None</option>
          {restaurantList.map((restaurant) => (
            <option value={restaurant.id}>{restaurant.name}</option>
          ))}
        </select>
        <br />
        <label htmlFor="hour">Enter orders time limit:</label>
        <br />
        <input
          type="time"
          id="hour"
          name="fhour"
          value={delivery.hour}
          onChange={(e) => {
            updateDeliveryData("hour", e.target.value);
            closeRequestsHour.current = delivery.hour;
          }}
        />
        <br />
        <label htmlFor="close">Automatically close requests?</label>
        <br />
        <input
          type="checkbox"
          id="close"
          name="fclose"
          checked={delivery.close}
          onChange={() => updateDeliveryData("close", !delivery.close)}
        />
        <br />
        <button onClick={() => submitForm()}>Submit</button>
        <button onClick={() => canOrder()} style={{ display: "none" }}>
          Can order?
        </button>
      </div>
    </div>
  );
};

export default BurritosForDelivery;
