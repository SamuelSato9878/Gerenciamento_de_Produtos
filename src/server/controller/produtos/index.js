const registerProduct = require("./registerProduct");
const searchProduct = require("./searchProduct");
const updatedProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct")
const listProduct = require('./listProduct')

module.exports = {
    ...registerProduct,
    ...searchProduct,
    ...updatedProduct,
    ...deleteProduct,
    ...listProduct,
};