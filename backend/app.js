const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/movies", require("./routes/movies"));
app.use("/api/cinemas", require("./routes/cinemas"));
app.use("/api/shows", require("./routes/shows"));
app.use("/api/users", require("./routes/users"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/content", require("./routes/content"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let date_time = new Date();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(hours + ":" + minutes + ":" + seconds + ` Server running on port ${PORT}`);
});
