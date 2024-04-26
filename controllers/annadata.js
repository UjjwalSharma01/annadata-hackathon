const Forum = require("../models/forum")
module.exports.index = async(req,res)=>{
    res.render("../views/index.ejs");
};
module.exports.schemes=async(req,res)=>{
    res.render("../views/schemes.ejs")
}
module.exports.renderForums = async (req, res) =>{
    const allPost= await Forum.find({})
    .populate('author')
    res.render("forum.ejs",{allPost})
}
