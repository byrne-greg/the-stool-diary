import moment from "moment"

export const getRandomHistoricalMoment = () =>
  moment()
    .subtract(Math.round(Math.random() * 100), "days")
    .subtract(Math.round(Math.random() * 24), "hours")
    .subtract(Math.round(Math.random() * 60), "minutes")
    .subtract(Math.round(Math.random() * 60), "seconds")
