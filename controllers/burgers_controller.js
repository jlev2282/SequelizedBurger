//Controller for Burger

var express = require("express");

var router = express.Router();
var db = requrie("../models/");

//set root route to go to burgers get route instead
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.findAll()
        .then(function(dbBurger) {
            console.log(dbBurger);

            var hbsObject = {burger: dbBurger };
            return res.render("index", hbsObject);
    });
});