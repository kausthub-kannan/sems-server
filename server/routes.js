const express = require("express");
const { data } = require("./controllers/Data");
const { signIn } = require("./controllers/Users");
const router = express.Router();

router.post('/', signIn);
router.get('/real', data);

module.exports = router;  