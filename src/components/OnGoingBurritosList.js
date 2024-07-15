import React, { useEffect, useState } from "react";
import { DeliveryService } from "../services/DeliveryService";

const OnGoingBurritosList = () => {
  const [onGoingDeliveries, setOnGoingDeliveries] = useState([]);

  useEffect(() => {
    DeliveryService.getDeliveryList().then((data) =>
      setOnGoingDeliveries(data)
    );
  }, []);

  return (
    <div className="align-on-center align-text-left">
      <table>
        <thead>
          <tr>
            <th>Who is bringing burritos?</th>
            <th>Burritos from</th>
            <th>Arrival time to the place</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {onGoingDeliveries.map((delivery) => (
            <tr>
              <td>{delivery.name}</td>
              <td>{delivery.restaurant}</td>
              <td>{delivery.hour}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OnGoingBurritosList;
