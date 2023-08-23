const express = require("express");
const router = express.Router();

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    addComment,
    getCommentsByProductId
} = require("../controllers/product.controller");


router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);
router.post("/:id", addComment);
router.get("/:id/comments", getCommentsByProductId);

module.exports = router;
