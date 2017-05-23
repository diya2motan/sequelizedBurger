// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var express = require("express");

// var router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    // console.log(req);
    db.Burger.findAll({

    }).then(function(dbBurger) {
      // console.log(dbBurger);
      // var burgers = dbBurger[0].dataValues;
      // console.log(burgers);
      var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
      // res.json(dbBurger);
    });
  });


  // POST route for saving a new post
  app.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {

      // res.json(dbBurger);
      res.redirect("/");
    });
  });

  // PUT route for updating posts
  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured: true,
    },
      {
        where: {
          id: req.params.id
        }            
      }).then(function(dbBurger) {
        res.redirect("/");
      });
  });
};

