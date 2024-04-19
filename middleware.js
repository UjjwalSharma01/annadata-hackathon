// const Listing = require("./models/listing.js");
// const review = require("./models/review.js");
// const Review = require("./models/review.js")
// const {listingSchema,reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
module.exports.isLoggedIn = (req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be loggedin ");
        return res.redirect("/signup")
    }
    next();
}
module.exports.saveRedirectUrl = (req, res, next) => {
    console.log("saveRedirectUrl called")
    console.log(res.locals.redirectUrl)
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        return res.redirect("/signup"); // Redirect here and end the middleware chain
    }
    next(); // Call next only if there is no redirect
};

// module.exports.saveRedirectUrl = (req,res,next)=>{
//     console.log("saveRedirectUrl called")
//     if(req.session.redirectUrl){
//         res.locals.redirectUrl = req.session.redirectUrl;
//     }
//     console.log(res.locals.redirectUrl)
//     console.log(req.session)
//     next();
// };



// module.exports.isOwner = async (req,res,next)=>{
//     let {id}=req.params;
//     let listing = await Listing.findById(id);
//     if (!listing.owner.equals(res.locals.currentUser._id)) {
//         console.log(listing);
//         req.flash("error","You are not permited to make changes to this listing ");
//         return res.redirect(`/listings/${id}`);
        
//     }
//     next();
// }


