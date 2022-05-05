const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
  //   const products = await Product.find({ name: 'vase table' });
  //   const products = await Product.find({ price: { $gt: 50000 } })
  //     .sort('price')
  //     .select('name price');
  console.log(req.query);
  const products = await Product.find(req.query);
  //   const products = await Product.find({ page: 5 });
  //   const products = await Product.find({ page: 'reds' });
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  //   console.log(req.query);
  const products = await Product.find(req.query);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
