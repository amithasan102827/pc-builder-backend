const { v4: uuidv4 } = require("uuid");

const Product = require("../models/product.model");

// Create a new Product
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: console.log(error) });
    }
};

// getAllProducts
const getAllProducts = async (req, res) => {
    try {
        const Products = await Product.find();
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// getSingleProduct
const getSingleProduct = async (req, res) => {
    try {
        const Products = await Product.findById({ _id: req.params.id });
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// deleteProduct
const deleteProduct = async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Product is deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};



// Update a single Product by ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};



// addComment
const addComment = async (req, res) => {
    try {
        const ProductId = req.params.id;
        const { comment } = req.body;

        const Product = await Product.findById(ProductId);

        if (!Product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const newComment = {
            comment,
            createdAt: new Date(),
        };

        Product.comments.push(newComment);

        await Product.save();

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// getCommentsByProductId
const  getCommentsByProductId = async (req, res) => {
    try {
        const ProductId = req.params.id;

        const Product = await Product.findById(ProductId);

        if (!Product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(Product.comments);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
    addComment,
    getCommentsByProductId
};
