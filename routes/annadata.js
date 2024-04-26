const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,} = require("../middleware.js");
const annadataController = require("../controllers/annadata.js");

router.route("/")
.get(wrapAsync(annadataController.index))


router.route("/schemes")
.get(wrapAsync(annadataController.schemes))

router.route("/forums")
.get(wrapAsync(annadataController.renderForums))




module.exports = router;

