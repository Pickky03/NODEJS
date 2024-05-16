const express = require("express");
const bodyParser = require("body-parser");
const booksRouter = express.Router();

booksRouter.use(bodyParser.json());

booksRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the books to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the book: " +
        req.body.isbn +
        " with details: " +
        req.body.title +
        req.body.subTitle +
        req.body.publish_date +
        req.body.publisher +
        req.body.pages +
        req.body.description +
        req.body.website
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /books");
  })
  .delete((req, res, next) => {
    res.end("Deleting all books");
  });

booksRouter
  .route("/:bookId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the books to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the book: " +
        req.body.isbn +
        " with details: " +
        req.body.title +
        req.body.subTitle +
        req.body.publish_date +
        req.body.publisher +
        req.body.pages +
        req.body.description +
        req.body.website
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /books");
  })
  .delete((req, res, next) => {
    res.end("Deleting all books");
  });

module.exports = booksRouter;
