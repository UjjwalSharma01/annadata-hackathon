const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,} = require("../middleware.js");
const annadataController = require("../controllers/annadata.js");
const forumController = require("../controllers/forum.js");
const User = require("../models/user");
const Forum = require("../models/forum")

router.route("/ask")
.get(isLoggedIn,wrapAsync(forumController.renderAsk))
.post(isLoggedIn,wrapAsync(forumController.postQues))

module.exports = router;
