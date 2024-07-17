import React, { useEffect, useState } from "react";
import { DeliveryService } from "../services/DeliveryService";
import utils from "../utils/utils";

const OnGoingBurritosList = ({ userList, restaurantList }) => {
  const [onGoingDeliveries, setOnGoingDeliveries] = useState([]);

  useEffect(() => {
    DeliveryService.getDeliveryList().then((data) =>
      setOnGoingDeliveries(data)
    );
  }, []);

  return (
    <div className="align-on-center align-text-left">
      <table className="orders-table">
        <thead>
          <tr>
            <th>Who is bringing burritos?</th>
            <th>Burritos from...</th>
            <th>Time limit to order</th>
            <th>Can order?</th>
            <th>Actions</th>
          </tr>
        </thead>
        {onGoingDeliveries.length > 0 ? (
          <tbody>
            {onGoingDeliveries.map((delivery) => (
              <tr key={delivery.id}>
                <td>
                  {userList.find((x) => x.username === delivery.user)?.name}
                </td>
                <td>
                  {
                    restaurantList.find(
                      (x) => x.id === Number(delivery.restaurant)
                    )?.name
                  }
                </td>
                <td>{utils.formatHourToLocal(delivery.hour)}</td>
                <td>
                  {!utils.didTimePassedLimit(delivery.hour) ? (
                    <span className="dot available"></span>
                  ) : delivery.autoClose ? (
                    <span className="dot closed"></span>
                  ) : (
                    <span className="dot unknown"></span>
                  )}
                </td>
                <td>
                  <button
                    className="link-button"
                    disabled={
                      utils.didTimePassedLimit(delivery.hour) &&
                      delivery.autoClose
                    }
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className="colspan-row" colSpan={5}>
                There is no data
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default OnGoingBurritosList;
