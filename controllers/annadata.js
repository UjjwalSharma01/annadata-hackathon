const Forum = require("../models/forum")
const User = require("../models/user")

module.exports.index = async(req,res)=>{
    res.render("../views/index.ejs");
};
module.exports.schemes=async(req,res)=>{
    res.render("../views/schemes.ejs")
}
module.exports.renderForums = async (req, res) =>{
    const allPost= await Forum.find({})
    .populate('author')
    res.render("../views/forum.ejs",{allPost})
}
module.exports.profile=async(req,res)=>{
    let user = await User.findById(req.user._id)
    res.render("../views/profile.ejs", {user})
}
