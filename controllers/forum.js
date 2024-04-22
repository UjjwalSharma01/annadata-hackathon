const User = require("../models/user");
const Forum = require("../models/forum")


module.exports.renderForums = async (req, res) =>{
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.render("forum.ejs", { user: user, userId: userId });
    } catch (err) {
        console.error("Error rendering forum page:", err);
        req.flash("error", "Error rendering forum page");
        res.redirect("/annadata"); // Redirect to a safe page
    }
}
module.exports.createForum = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(req.body);
        const newForum = new Forum(req.body);
        newForum.author = req.user._id;
        await newForum.save();
        req.flash("success", "Message added on Forum");
        // Redirect to the specific forum page for the user
        res.redirect(`/annadata/${req.params.id}/forums`);
    } catch (err) {
        console.error("Error adding message to forum:", err);
        req.flash("error", "Error adding message to forum");
        res.redirect("/annadata"); // Redirect to a safe page
    }
}
