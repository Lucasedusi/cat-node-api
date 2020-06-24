// Vamos mostrar qual é o nosso schema, que basicamente é quais os campos que
// um produto pode ter, e quais os seus respectivos tipos
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Product', ProductSchema);
