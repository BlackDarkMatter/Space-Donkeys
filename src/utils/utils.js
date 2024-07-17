const utils = {
  async delay(delayInms) {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  },

  didTimePassedLimit(closeRequestsHour) {
    let currentDate = new Date();
    let limitTime = new Date();
    let splitedTime = closeRequestsHour.split(":");
    limitTime.setHours(splitedTime[0], splitedTime[1]);

    return currentDate.getTime() > limitTime.getTime();
  },

  formatHourToLocal(time) {
    let d = time.split(":");
    return (
      (Number(d[0]) > 12 ? Number(d[0]) - 12 : Number(d[0])) +
      ":" +
      d[1] +
      " " +
      (Number(d[0]) >= 12 ? "PM" : "AM")
    );
  },
};

export default utils;
