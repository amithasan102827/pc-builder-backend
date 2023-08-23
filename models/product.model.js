const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    category: {
        type: String,
        reuire: true,
    },
    name: {
        type: String,
        reuire: true,
    },
    image: {
        type: String,
        reuire: true,
    },
    status: {
        type: String,
        reuire: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        reuire: true,
    },
    individualRating : {
        type: Number,
        reuire: true,
    },
    averageRating : {
        type: Number,
        reuire: true,
    },
    comments: [
        {
            comment: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
    keyFeatures: [
        {
            comment: String,
            // createdAt: { type: Date, default: Date.now },
        },
    ],
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);
