module.exports.index = async(req,res)=>{
    res.render("index.ejs");
};
module.exports.schemes=async(req,res)=>{
    res.render("schemes.ejs")
}
module.exports.renderForums = async (req, res) =>{
    res.render("forum.ejs")
}