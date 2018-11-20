const express = require('express');
const app = express();
const router = express.Router();

const userData = require('../models/index');

router.route('/add').post(function (req, res) {
  const users = new userData(req.body);
  users.save()
    .then(users => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

router.route('/').get(function (req, res) {
    userData.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

module.exports = router;
