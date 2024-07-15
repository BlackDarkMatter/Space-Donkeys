const utils = {
  async delay(delayInms) {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  },

  getClosingTime(currentTime, minutes) {
    const splitedTime = currentTime.split(":");
    let time = new Date();
    time.setHours(splitedTime[0], splitedTime[1]);
    return time.getHours() + ":" + time.getMinutes();
  },
};

export default utils;
