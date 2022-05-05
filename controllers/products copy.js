const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
  //   console.log(req.query); products/?name=hello,featured=true
  //   const products = await Product.find({ featured: true });
  const products = await Product.find({ name: 'vase table' });
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
