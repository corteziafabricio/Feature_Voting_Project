const express = require('express');
const { voteFeature } = require('../controllers/voteController');

const router = express.Router();

router.post('/:featureId', voteFeature);

module.exports = router;