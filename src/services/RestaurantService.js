export const RestaurantService = {
  async getRestaurants() {
    await delay(500);
    return [
      {
        name: "Burritos Andariego",
        menu: [
          { dish: "Burrito de asado", price: "25" },
          { dish: "Burrito de picadillo", price: "25" },
          { dish: "Burrito de deshebrada", price: "25" },
          { dish: "Burrito de discada", price: "25" },
          { dish: "Burrito de chicharron", price: "25" },
          { dish: "Burrito de chicharron prensado", price: "30" },
          { dish: "Burrito de chile relleno", price: "30" },
        ],
      },
    ];
  },
};

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
