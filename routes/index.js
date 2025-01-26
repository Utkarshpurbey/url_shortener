const express = require('express');
const router = express.Router();
const {handleRedirectUrl,handleReturnAnalytcs} = require('../controllers/url')

router.get('/:shortId',handleRedirectUrl);
router.get('/analytics/:shortId',handleReturnAnalytcs);

module.exports = router;