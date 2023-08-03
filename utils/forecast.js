const axios = require("axios");
require("dotenv").config();

const forecast = (long, lat, callback) => {
  key = process.env.WEATHER_KEY;
  // baseUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${address}`;

  const baseUrl = "http://api.weatherapi.com/v1/";
  const config = {
    time: "current",
    format: ".json?",
    key: `key=${key}`,
    address: `&q=${long},${lat}`,
  };
  const url =
    baseUrl + config.time + config.format + config.key + config.address;

  axios
    .get(url)
    .then((response) => {
      debugger;
      callback({
        location: response.data.location.name,
        temp: response.data.current.temp_c,
        feelslike: response.data.current.feelslike_c,
        condition: response.data.current.condition.text,
      });
    })
    .catch((error) => {
      if (error.response) {
        callback(error.response.data, undefined);
      } else {
        debugger;
        callback("there is no internet");
      }
      // console.log(error.response.request.res.statusCode);
      // console.log(error.response.request.res.statusMessage);
    });
};

module.exports = forecast;
