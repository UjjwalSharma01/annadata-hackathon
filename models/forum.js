const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    title:String,
    message:String,
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});
module.exports = mongoose.model("Forum",forumSchema);