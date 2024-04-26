const User = require("../models/user");
const Forum = require("../models/forum")


module.exports.renderAsk = async (req, res) =>{
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.render("ask.ejs", { user: user, userId: userId });
    } catch (err) {
        console.error("Error rendering ask page:", err);
        req.flash("error", "Error rendering ask page");
        res.redirect("/annadata"); // Redirect to a safe page
    }
}//ask question controller
module.exports.postQues = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log("post request recieved");
        const newForum = new Forum(req.body);
        newForum.author = req.user._id;
        await newForum.save();
        req.flash("success", "Question added on Forum");
        // Redirect to the specific forum page for the user
        res.redirect("/annadata/forums")
    } catch (err) {
        console.error("Error adding message to forum:", err);
        req.flash("error", "Error adding message to forum");
        res.redirect("/annadata"); // Redirect to a safe page
    }
}
