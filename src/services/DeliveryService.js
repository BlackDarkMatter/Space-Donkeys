import DataUtils from "../utils/dataUtils";

const dataName = "deliveryList";

export const DeliveryService = {
  async getDeliveryList() {
    return await DataUtils.readData(dataName);
  },

  async saveDeliveryList(data) {
    await DataUtils.writeData(dataName, data);
  },
};
