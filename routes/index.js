var express = require('express');
var router = express.Router();
const db = require('../database/database')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const result = await db.getdata();
  const result1 = await db.gettop();
  console.log(result1.rows);
  res.render('index', { resultData: result.rows, topData: result1.rows});
});

router.get('/country',async function(req, res, next) {
  const result = await db.getworld();
  const result1 = await db.getTotal();
  console.log(result.rows);
  res.render('country', { resultData: result.rows, totalData:result1.rows });
});

router.get('/world',async function(req, res, next) {
  const result = await db.getworld();
  console.log(result.rows);
  res.render('world', { resultData: result.rows });
});


module.exports = router;


