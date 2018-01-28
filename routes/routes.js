var express = require('express');
var router =  express.Router();

router.get('/', function(req, res, next){
	res.send('Task API');
});

module.exports =  router;