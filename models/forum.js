const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    Question:String,
    Description:String,
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    Category:{
        type:String,
        enum:['Agricultural Comodity','Agricultural Product','Crop Insurence',"Farmer's Issues",
        'Livestock and Animal Husbandery','Organic Farming','Schemes and Subsidies']
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});
module.exports = mongoose.model("Forum",forumSchema);