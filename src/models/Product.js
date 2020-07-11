const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

mongoose.plugin(mongoosePaginate);

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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Product', ProductSchema);
