const express = require("express");
const bodyParser = require("body-parser");
const genresRouter = express.Router();

genresRouter.use(bodyParser.json());

genresRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the genres to you!");
  })
  .post((req, res, next) => {
    res.end("Will add the id: " + req.body.id + " with name: " + req.body.name + req.body.birthYear + req.body.country);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /genres");
  })
  .delete((req, res, next) => {
    res.end("Deleting all genres");
  });

module.exports = genresRouter;
