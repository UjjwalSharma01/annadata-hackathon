const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cropImageSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    diseased: {
        type: Boolean,
        required: true,
    },
    diseaseName: {
        type: String,
    },
    dateUploaded: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
});

module.exports = mongoose.model("CropImage", cropImageSchema);
