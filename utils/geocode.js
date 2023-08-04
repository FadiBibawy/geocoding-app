const axios = require("axios");
const chalk = require("chalk");

const geocode = (address, callback) => {
  const url = `https://geocode.maps.co/search?q={${address}}`;

  axios
    .get(url)
    // .get("https://geocode.maps.co/searcadasdasdsosangeles%7D")
    .then((response) => {
      if (response.data.length === 0) {
        callback("there is no location matching your search", undefined);
      } else {
        // console.log(response);
        let name = response.data[0].display_name;
        let lon = response.data[0].lon;
        let lat = response.data[0].lat;

        callback(undefined, {
          name: name,
          lon: lon,
          lat: lat,
        });
      }
    })
    .catch((error) => {
      if (error.response) {
        callback(
          `the provided URL is broken or server is down \n status code: ${error.response.request.res.statusCode} : ${error.response.request.res.statusMessage}`,
          undefined
        );
      } else {
        callback("there is no internet");
      }
      // console.log(error.response.request.res.statusCode);
      // console.log(error.response.request.res.statusMessage);
    });
};

module.exports = geocode;
