const mongoose = require('./../db');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  proid: { type: String },
  proname: { type: String },
  probrand: { type: String },
  brandimg: { type: String },
  proimg: { type: String },
  price: { type: Number },
  detail: { type: String },
  stock: { type: Number },
  sales: { type: Number }
})

// 就会自动创建一个  数据库集合products
module.exports = mongoose.model('Product', productSchema);


