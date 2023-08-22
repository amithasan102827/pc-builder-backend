const { v4: uuidv4 } = require("uuid");

const Book = require("../models/book.model");

// Create a new book
const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: console.log(error) });
    }
};

// getAllBooks
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// getSingleBook
const getSingleBook = async (req, res) => {
    try {
        const book = await Book.findById({ _id: req.params.id });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// deleteBook
const deleteBook = async (req, res) => {
    try {
        await Book.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Book is deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// controllers/bookController.js

// ... other controller functions ...

// Update a single book by ID
const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};



// addComment
const addComment = async (req, res) => {
    try {
        const bookId = req.params.id;
        const { comment } = req.body;

        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        const newComment = {
            comment,
            createdAt: new Date(),
        };

        book.comments.push(newComment);

        await book.save();

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// getCommentsByBookId
const  getCommentsByBookId = async (req, res) => {
    try {
        const bookId = req.params.id;

        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book.comments);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook,
    addComment,
    getCommentsByBookId
};
