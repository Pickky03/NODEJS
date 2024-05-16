const express = require("express");
const bodyParser = require("body-parser");
const authorRouter = express.Router();

authorRouter.use(bodyParser.json());

authorRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the authors to you!");
  })
  .post((req, res, next) => {
    res.end("Will add the id: " + req.body.id + " with name: " + req.body.name);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /author");
  })
  .delete((req, res, next) => {
    res.end("Deleting all author");
  });

authorRouter
  .route("/:id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the authors to you!");
  })
  .post((req, res, next) => {
    res.end("Will add the id: " + req.body.id + " with name: " + req.body.name);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /author");
  })
  .delete((req, res, next) => {
    res.end("Deleting all author");
  });

module.exports = authorRouter;
