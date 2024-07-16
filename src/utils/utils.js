const utils = {
  async delay(delayInms) {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  },
};

export default utils;
