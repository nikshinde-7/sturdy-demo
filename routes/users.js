var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ data: [{ username: "John Jackobs", id: 1 }, { username: "Jake Gynehellal", id: 2 }] });
});

module.exports = router;
