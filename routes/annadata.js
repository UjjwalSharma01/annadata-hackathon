const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,} = require("../middleware.js");
const annadataController = require("../controllers/annadata.js");
router.route("/")
.get(wrapAsync(annadataController.index))

router.route("/schemes")
.get(isLoggedIn,wrapAsync(annadataController.schemes))

router.route("/forums")
.get(isLoggedIn,wrapAsync(annadataController.renderForums))

router.route("/profile")
.get(isLoggedIn,wrapAsync(annadataController.profile))
.put(wrapAsync(annadataController.editProfile))
.patch(wrapAsync(annadataController.updatePicture));
module.exports = router;

