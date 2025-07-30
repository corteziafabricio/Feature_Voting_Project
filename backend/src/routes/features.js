const express = require('express');
const { getAllFeatures, createFeature, getFeatureById } = require('../controllers/featureController');

const router = express.Router();

router.get('/', getAllFeatures);
router.post('/', createFeature);
router.get('/:id', getFeatureById);

module.exports = router;