const express = require("express");
const app = express();
const plantRouter = require("./plants/routes");
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use(express.json());
app.use(cors());

app.use("/api/plants", plantRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.end("error");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
