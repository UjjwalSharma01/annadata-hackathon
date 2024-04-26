const { saveRedirectUrl } = require("../middleware");
const User = require("../models/user")

module.exports.renderSignupPage = (req, res) => {
    res.render("signup_login.ejs")
};

module.exports.signup = async (req, res) => {
    try {
        const { username, email, password, location, land_area, income } = req.body;
        const user = new User({ username, email, password, location, land_area, income });
        await user.save();
        req.login(user, (err) => {
            if (err) {
                req.flash("error", err);
                return res.redirect("/signup");
            }
            req.flash("success", "Welcome to AnnaData!");
            res.redirect("/annadata");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// module.exports.signup = async(req,res)=>{
//     try{
//         let { username ,  email , password} = req.body;
//     const newUser = new User({email ,username});
//     const registeredUser = await User.register(newUser,password);
//     console.log(registeredUser);
//     req.login(registeredUser,(err)=>{
//         if(err){
//             req.flash("faliure",err)
//             return next(err);
//         }else{
//             req.flash("success","Welcome to annadata")
//             res.redirect("/annadata")
//         }
//     })

//     }
//     catch(e){
//         req.flash("error",e.message);
//         res.redirect("/signup")
//     }
// };

// module.exports.renderLoginPage =(req,res)=>{

//     res.render("users/login.ejs")
// };

module.exports.login = async (req, res) => {
    req.flash("success", "You are Loggedin!");
    // let redirectUrl = res.local.redirectUrl || "/annadata";
    res.redirect("/annadata");

};

module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logedout!");
        res.redirect("/annadata")
    })
};
