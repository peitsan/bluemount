const sql = require('./index')
const Admin = require('./col/Admin')

const insertData = [
  {
    adminid: 'admin',
    username: 'linpeican', // 123456
    password: 'b504bb94f881beb88c15c156b9123dbb98444ca055aa83f9c497153c6d195f0f',
    role: 1 // 管理员
  }
]

sql.insert(Admin, insertData).then(() => {
  console.log('插入成功')
})
