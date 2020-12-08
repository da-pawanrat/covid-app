var express = require('express');
var router = express.Router();
const db = require('../database/database')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('index', { resultData: result.rows});
});
router.get('/index',async function(req, res, next) {
  const result = await db.getdata();
  console.log(result.rows);
  res.render('index', { resultData: result.rows });
});

router.get('/country',async function(req, res, next) {
  const result = await db.getTotal();
  console.log(result.rows);
  res.render('country', { resultData: result.rows });
});


module.exports = router;


