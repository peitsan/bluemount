const mongoose = require('mongoose');

const DB_URL = "mongodb://127.0.0.1:27017/reminder"

// 后面两个不需要记忆，会自动提示
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('数据库链接成功')
})

mongoose.connection.on('disconnected', () => {
  console.log('数据库链接失败')
})

mongoose.connection.on('error', () => {
  console.log('数据库链接异常')
})

module.exports = mongoose;
