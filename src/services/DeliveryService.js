import DataUtils from "../utils/dataUtils";

const dataName = "deliveryList";

export const DeliveryService = {
  async getDeliveryList() {
    return (await DataUtils.readData(dataName)) || [];
  },

  async saveDeliveryList(data) {
    await DataUtils.writeData(dataName, data);
  },

  async saveDelivery(data) {
    const deliveryList = await this.getDeliveryList();
    this.saveDeliveryList([
      ...deliveryList,
      { ...data, id: Math.max(deliveryList.map((x) => x.id)) + 1 || 1 },
    ]);
  },
};
