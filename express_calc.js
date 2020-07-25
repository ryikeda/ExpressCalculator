const express = require("express");
const { strToArr, getMean, getMedian, getMode } = require("./helpers");
const ExpressError = require("./expressError");

const app = express();

app.get("/mean", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "Please pass a list of numbers separated with comma in the query string",
      400
    );
  }
  const numsArr = strToArr(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  const result = {
    operation: "mean",
    result: getMean(numsArr),
  };
  return res.send(result);
});
app.get("/mode", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "Please pass a list of numbers separated with comma in the query string",
      400
    );
  }
  const numsArr = strToArr(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  const result = {
    operation: "mode",
    result: getMode(numsArr),
  };
  return res.send(result);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});
app.get("/median", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "Please pass a list of numbers separated with comma in the query string",
      400
    );
  }
  const numsArr = strToArr(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  const result = {
    operation: "median",
    result: getMedian(numsArr),
  };
  return res.send(result);
});

app.get("/all", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "Please pass a list of numbers separated with comma in the query string",
      400
    );
  }
  const numsArr = strToArr(req.query.nums);
  if (numsArr instanceof Error) {
    throw new ExpressError(numsArr.message);
  }

  const result = {
    operation: "all",
    mean: getMean(numsArr),
    media: getMedian(numsArr),
    mode: getMode(numsArr),
  };
  return res.send(result);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("App on port 3000");
});
