const express = require("express");
const path = require("path");
const app = express();

const publicDIR = path.join(__dirname, "/public");

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

app.use(express.static(publicDIR));

app.get("/", (req, res) => {
  res.send("this is the homeee");
});
app.get("/help", (req, res) => {
  res.send("this is the helpt");
});
app.get("/about", (req, res) => {
  res.send("this is the about");
});
app.get("/weather", (req, res) => {
  res.send("<h1>WEATHER Pageeeeeeeeeeeee</h1>");
});

app.listen(3005);
