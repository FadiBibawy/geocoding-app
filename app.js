const geocode = require("./src/utils/geocode");
const forecast = require("./src/utils/forecast");

const chalk = require("chalk");
// axios
//   .get("https://geocode.maps.co/search?q={Egypt}")
//   // .get("https://geocode.maps.co/searcadasdasdsosangeles%7D")
//   .then((response) => {
//     if (response.length === 0) {
//       console.log("there is no location matching your search");
//     } else {
//       // console.log(response);
//       let name = response.data[0].display_name;
//       let lon = response.data[0].lon;
//       let lat = response.data[0].lat;
//       debugger;
//       console.log(
//         `This is geocoding for ${chalk.inverse(
//           name
//         )}.\n longtitude: ${chalk.green(lon)} \n latitude: ${chalk.green(lat)}`
//       );
//     }
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.log(
//         `the provided URL is broken or server is down ${error.response.request.res.statusCode} : ${error.response.request.res.statusMessage}`
//       );
//     } else {
//       console.log("there is no internet");
//     }
//     // console.log(error.response.request.res.statusCode);
//     // console.log(error.response.request.res.statusMessage);
//   });

if (process.argv.length === 2) {
  console.log(chalk.red("please provide a location"));
} else {
  const data = geocode(process.argv[2], (error, data) => {
    // console.log("error:", error);
    // console.log("data:", data);
    forecast(data.lat, data.lon, (response) => {
      console.log(response);
    });
  });
}
