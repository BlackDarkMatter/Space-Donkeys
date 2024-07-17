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
    let dataIndex = deliveryList.findIndex((x) => x.id === data.id);
    if (dataIndex >= 0) {
      this.saveDeliveryList([
        ...deliveryList.slice(0, dataIndex),
        data,
        ...deliveryList.slice(dataIndex + 1),
      ]);
    } else {
      this.saveDeliveryList([
        ...deliveryList,
        { ...data, id: Math.max(deliveryList.map((x) => x.id)) + 1 || 1 },
      ]);
    }
  },
};
