import utils from "../utils/utils";

export const RestaurantService = {
  async getRestaurants() {
    await utils.delay(500);
    return [
      {
        id: 1,
        name: "Burritos De Villa Ahumada",
        menu: [
          { id: 1, dish: "Burrito de asado", price: "25" },
          { id: 2, dish: "Burrito de picadillo", price: "25" },
          { id: 3, dish: "Burrito de deshebrada", price: "25" },
          { id: 4, dish: "Burrito de discada", price: "25" },
          { id: 5, dish: "Burrito de chicharron", price: "25" },
          { id: 6, dish: "Burrito de chicharron prensado", price: "30" },
          { id: 7, dish: "Burrito de chile relleno", price: "30" },
        ],
      },
      {
        id: 2,
        name: "Burritos El Wero",
        menu: [
          { id: 1, dish: "Burrito de asado", price: "25" },
          { id: 2, dish: "Burrito de picadillo", price: "25" },
          { id: 3, dish: "Burrito de deshebrada roja", price: "25" },
          { id: 3, dish: "Burrito de deshebrada verde", price: "25" },
          { id: 4, dish: "Burrito de discada", price: "25" },
          { id: 5, dish: "Burrito de chicharron", price: "25" },
          { id: 6, dish: "Burrito de rajas con queso", price: "25" },
          { id: 7, dish: "Burrito de chile relleno", price: "30" },
        ],
      },
    ];
  },
};
