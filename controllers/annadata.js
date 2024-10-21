const Forum = require("../models/forum")
const User = require("../models/user")
// const cropImages = require("../models/cropImage")

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
    let user = await User.findById(req.user._id).populate('cropImages');
    res.render("../views/profile.ejs", {user})
}
module.exports.editProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        console.log(userId)
        let user = await User.findById(userId)
         let userObj={
         username:req.body.username||user.username,
         email : req.body.email||user.email,
         mobile_no : req.body.mobile_no||user.mobile_no,
         location : req.body.location||user.location,
         land_area : req.body.land_area||user.land_area,
         }
        const updatedUser = await User.findByIdAndUpdate(userId, userObj, { new: true, runValidators: true });
        
        if (!updatedUser) {
            req.flash('error', 'User not found');
            return res.status(404).redirect('/annadata/profile');
        }
        
        req.flash('success', 'Profile updated successfully');
        res.redirect('/annadata/profile');
    } catch (error) {
        console.error('Error updating profile:', error);
        req.flash('error', 'An error occurred while updating your profile');
        res.redirect('/annadata/profile');
    }
};
module.exports.deleteProfile=async(req,res)=>{
    await User.findByIdAndDelete(req.user._id);
    res.redirect("/annadata");
}
module.exports.updatePicture=async(req,res)=>{
    try {
        const userId = req.user._id;
        console.log(userId)
        let userObj = await User.findById(userId);
        userObj.profile_picture=req.body.profile_picture;

        const updatedUser = await User.findByIdAndUpdate(userId, userObj, { new: true, runValidators: true });
        
        if (!updatedUser) {
            req.flash('error', 'User not found');
            return res.status(404).redirect('/annadata/profile');
        }
        
        req.flash('success', 'Profile updated successfully');
        res.redirect('/annadata/profile');
    } catch (error) {
        console.error('Error updating profile:', error);
        req.flash('error', 'An error occurred while updating your profile');
        res.redirect('/annadata/profile');
    }
}