const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");

// Definning paths for express config
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialDir = path.join(__dirname, "../templates/partials");

// setting hbs as the views renderer and setting up the views location
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialDir);

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Weather App",
    profession: "getting you some usefull forecast information.",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Fadi",
    profession: "Backend Engineer",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send("please provide an address");
  } else {
    console.log(req.query.address);
    const data = geocode(req.query.address, (error, data) => {
      // console.log("error:", error);
      // console.log("data:", data);
      if (error) {
        res.send(error);
      } else {
        forecast(data.lat, data.lon, (response) => {
          res.send(response);
        });
      }
    });
  }

  // res.send(req.query);
});
// const options = {
//   dotfiles: "ignore",
//   etag: false,
//   extensions: ["htm", "html"],
//   index: false,
//   maxAge: "1d",
//   redirect: false,
//   setHeaders(res, path, stat) {
//     res.set("x-timestamp", Date.now());
//   },
// };

// app.get("/", (req, res) => {
//   res.send("this is the homeee");
// });
// app.get("/help", (req, res) => {
//   res.send("this is the helpt");
// });
// app.get("/about", (req, res) => {
//   res.send("this is the about");
// });
// app.get("/weather", (req, res) => {
//   res.send("<h1>WEATHER Pageeeeeeeeeeeee</h1>");
// });

app.listen(3005);
