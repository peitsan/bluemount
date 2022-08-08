const mongoose = require('./../db');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  adminid: { type: String },
  username: { type: String },
  password: { type: String },
  role: { type: Number } // 角色 - 权限
})

// 就会自动创建一个  数据库集合admins
module.exports = mongoose.model('Admin', adminSchema);
