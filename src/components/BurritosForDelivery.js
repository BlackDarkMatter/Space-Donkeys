import React, { useEffect, useRef, useState } from "react";
import { DeliveryService } from "../services/DeliveryService";
import utils from "../utils/utils";

const BurritosForDelivery = ({ currentUser }) => {
  const [delivery, setDelivery] = useState({
    name: currentUser.name,
    restaurant: 1,
    hour: "",
    close: false,
    minutesToClose: "",
  });

  const submitForm = () => {
    DeliveryService.saveDeliveryList([delivery]);
  };

  let closeRequestsHour = useRef(null);

  useEffect(() => {
    DeliveryService.getDeliveryList().then((data) => {
      if (data.length > 0) {
        setDelivery(data[0]);
        if (data[0].close) {
          closeRequestsHour.current = utils.getClosingTime(
            data[0].hour,
            Number(data[0].minutesToClose)
          );
        } else {
          closeRequestsHour.current = data[0].hour;
        }
      }
    });
  }, []);

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
        <label htmlFor="name">What's your name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="fname"
          value={delivery.name}
          onChange={(e) => updateDeliveryData("name", e.target.value)}
          disabled
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
          onChange={(e) => {
            updateDeliveryData("hour", e.target.value);
            if (delivery.close) {
              closeRequestsHour.current = utils.getClosingTime(
                e.target.value,
                Number(delivery.minutesToClose) || 0
              );
            } else {
              closeRequestsHour.current = delivery.hour;
            }
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
        {delivery.close ? (
          <div>
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
          </div>
        ) : (
          ""
        )}
        <button onClick={() => submitForm()}>Submit</button>
        <button onClick={() => canOrder()}>Can order?</button>
      </div>
    </div>
  );
};

export default BurritosForDelivery;
