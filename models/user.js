const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    location: {
        type: String,
    },
    land_area: {
        type: Number,
    },
    income: {
        type: Number,
    },
    mobile_no:{
        type: Number,
    },
     cropImages: [{
        type: Schema.Types.ObjectId,
        ref: 'CropImage',
    }],
    profile_picture: {
        type:String,
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);