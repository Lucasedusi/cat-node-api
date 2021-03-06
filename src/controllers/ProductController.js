const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 5 });

    res.json(products);
  },
  async show(req, res) {
    const products = await Product.findById(req.params.id);

    res.json(products);
  },
  async store(req, res) {
    const products = await Product.create(req.body);

    res.json(products);
  },
  async update(req, res) {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(products);
  },
  async destroy(req, res) {
    await Product.findByIdAndDelete(req.params.id);

    res.send();
  },
};
