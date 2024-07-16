import React, { useEffect, useState } from "react";
import { DeliveryService } from "../services/DeliveryService";

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
              <tr>
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
                <td>{delivery.hour}</td>
                <td>
                  <span className="dot available"></span>
                </td>
                <td>
                  <button className="link-button">Order</button>
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
