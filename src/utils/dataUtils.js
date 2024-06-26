import utils from "./utils";

const DataUtils = {
  async readData(dataName) {
    await utils.delay(1000);
    return window.localStorage.getItem(dataName) || [];
  },

  async writeData(dataName, data) {
    await utils.delay(1000);
    window.localStorage.setItem(dataName, data);
  },
};

export default DataUtils;
