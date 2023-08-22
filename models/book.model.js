const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     reuire: true,
    // },
    name: {
        type: String,
        reuire: true,
    },
    author: {
        type: String,
        reuire: true,
    },
    genre: {
        type: String,
        reuire: true,
    },
    publicationDate: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        reuire: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            comment: String,
            createdAt: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model("Book", bookSchema);
