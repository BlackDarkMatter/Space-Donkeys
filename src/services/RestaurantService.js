export const RestaurantService = {
  async getRestaurants() {
    await delay(500);
    return [
      {
        id: 1,
        name: "Burritos Andariego",
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
    ];
  },
};

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};
