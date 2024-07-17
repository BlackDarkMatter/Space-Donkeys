import React, { useState } from "react";
import { DeliveryService } from "../services/DeliveryService";

const BurritosForDelivery = ({ currentUser, restaurantList }) => {
  const [delivery, setDelivery] = useState({
    id: null,
    user: currentUser.username,
    restaurant: "0",
    hour: "",
    autoClose: false,
    active: true,
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
      DeliveryService.saveDelivery(delivery);
      window.alert("Success! Now you can receive orders!");
      setDelivery({
        id: null,
        user: currentUser.username,
        restaurant: "0",
        hour: "",
        autoClose: false,
        active: true,
      });
    } else {
      window.alert(errorMessage);
    }
  };

  const updateDeliveryData = (prop, data) => {
    let newData = { ...delivery };
    newData[prop] = data;
    setDelivery(newData);
  };

  return (
    <div className="align-on-center align-text-left">
      <div>
        <label htmlFor="restaurant">Where are you picking burritos from:</label>
        <br />
        <select
          id="restaurant"
          name="frestaurant"
          value={delivery.restaurant}
          onChange={(e) => updateDeliveryData("restaurant", e.target.value)}
        >
          <option value="0">None</option>
          {restaurantList.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
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
          onChange={(e) => updateDeliveryData("hour", e.target.value)}
        />
        <br />
        <label htmlFor="autoClose">Automatically close requests?</label>
        <br />
        <input
          type="checkbox"
          id="autoClose"
          name="fautoClose"
          checked={delivery.autoClose}
          onChange={() => updateDeliveryData("autoClose", !delivery.autoClose)}
        />
        <br />
        <button onClick={() => submitForm()}>Submit</button>
      </div>
    </div>
  );
};

export default BurritosForDelivery;
