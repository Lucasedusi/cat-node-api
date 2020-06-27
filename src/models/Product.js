const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = mongoose.Schema({
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
    required: true,
  },
  creatAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
