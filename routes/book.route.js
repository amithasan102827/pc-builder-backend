const express = require("express");
const router = express.Router();

const {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook,
    updateBook,
    addComment,
    getCommentsByBookId
} = require("../controllers/book.controller");


router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);
router.post("/:id", addComment);
router.get("/:id/comments", getCommentsByBookId);

module.exports = router;
