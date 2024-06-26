import React, { useEffect, useState } from "react";
import { DeliveryService } from "../services/DeliveryService";

const BurritosForDelivery = () => {
  const [delivery, setDelivery] = useState({
    name: "",
    restaurant: 1,
    hour: "",
    close: false,
    minutesToClose: "",
  });

  const submitForm = () => {
    DeliveryService.saveDeliveryList([delivery]);
  };

  useEffect(() => {
    DeliveryService.getDeliveryList().then((data) => {
      if (data.length > 0) {
        setDelivery(data[0]);
      }
    });
  }, []);

  const updateDeliveryData = (prop, data) => {
    let newData = { ...delivery };
    newData[prop] = data;
    setDelivery(newData);
  };

  return (
    <div className="align-on-center align-text-left">
      <div>
        <label htmlFor="name">What's your name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="fname"
          value={delivery.name}
          onChange={(e) => updateDeliveryData("name", e.target.value)}
        />
        <br />
        <label htmlFor="restaurant">Where are you picking burritos from:</label>
        <br />
        <select
          id="restaurant"
          name="frestaurant"
          defaultValue={delivery.restaurant}
          onChange={(e) => updateDeliveryData("restaurant", e.target.value)}
        >
          <option value="0">None</option>
          <option value="1">Default</option>
        </select>
        <br />
        <label htmlFor="hour">Enter arrival time to the place:</label>
        <br />
        <input
          type="time"
          id="hour"
          name="fhour"
          value={delivery.hour}
          onChange={(e) => updateDeliveryData("hour", e.target.value)}
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
        <label htmlFor="timeToClose">
          Close request on
          <input
            type="number"
            id="timeToClose"
            name="ftimeToClose"
            value={delivery.minutesToClose}
            onChange={(e) =>
              updateDeliveryData("minutesToClose", e.target.value)
            }
          />
          minutes before arrival time
        </label>
        <br />
        <button onClick={() => submitForm()}>Submit</button>
      </div>
    </div>
  );
};

export default BurritosForDelivery;
