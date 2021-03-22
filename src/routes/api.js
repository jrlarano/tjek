"use strict";

import express from 'express';

import offerview from '../controllers/api/offerview';

var router = express.Router();

router.get('/generate_offer_view', function (req, res) {
  return offerview.productOffer(req, res);
});

router.post('/generate_offer_view', function (req, res) {
  return offerview.productOffer(req, res);
});

router.get('/generate_image/', function (req, res) {
  return offerview.generateImage(req, res);
});

router.post('/generate_image/', function (req, res) {
  return offerview.generateImage(req, res);
});

module.exports = router;