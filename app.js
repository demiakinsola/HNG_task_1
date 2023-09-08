const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const bodyParser = require("body-parser");
const { format } = require("date-fns");
const moment = require('moment');
// var moment = require("moment-timezone");

//set up cors and make it pubicly accessible
app.use(cors());

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const currentDay = moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ssZ');
// console.log(currentDay);

//get the current date
const currentDate = moment().utcOffset(0).format();
// const DATE = new Date();
// const date = new Date().toISOString();
// console.log(DATE);
// console.log(date);
// const currentDate = date.slice(0, 19) + "Z";
// console.log(currentDate);

// console.log(moment().format())
// console.log(moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss[Z]'))

// //get the present day
const presentDay = moment().utc().format("dddd");
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(date.getDay());
// const presentDay = days[DATE.getDay()];
// console.log(presentDay);

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  res.json({
    slack_name: slack_name,
    current_day: presentDay,
    utc_time: currentDate,
    track: track,
    github_file_url:
      "https://github.com/demiakinsola/HNG_task_1/blob/main/app.js",
    github_repo_url: "https://github.com/demiakinsola/HNG_task_1",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
