const { saveRedirectUrl } = require("../middleware");
const User = require("../models/user")

module.exports.renderSignupPage = (req, res) => {
    res.render("signup_login.ejs")
};

module.exports.signup = async (req, res, next) => {
    try {
        // Destructure username, email, password, location, land_area, and income from req.body
        let { username, email, password, location, land_area, income } = req.body;

        // Create a new user object with the provided data
        const newUser = new User({ username, email, location, land_area, income });

        // Register the new user with the provided password
        const registeredUser = await User.register(newUser, password);

        console.log(registeredUser);

        // Log in the registered user
        req.login(registeredUser, (err) => {
            if (err) {
                req.flash("failure", err);
                return next(err);
            } else {
                req.flash("success", "Welcome to Annadata");
                res.redirect("/annadata");
            }
        });
    } catch (e) {
        // If an error occurs, redirect to the signup page with an error message
        req.flash("error" ,e.message);
        res.redirect("/signup")
    }
};

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
