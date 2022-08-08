const sql = require('./index')
const Admin = require('./col/Admin')

const insertData = [
  // {
  //   adminid: 'admin1',
  //   username: 'admin', // abcdefg
  //   password: '9f6cd07ee8f95e87a0f4049bae97f371a9293d797601245185dca7d86e5520cf',
  //   role: 2 // 超级管理员
  // },
  // {
  //   adminid: 'admin2',
  //   username: 'daxun', // 123456
  //   password: 'b504bb94f881beb88c15c156b9123dbb98444ca055aa83f9c497153c6d195f0f',
  //   role: 1 // 管理员
  // }
  {
    adminid: 'admin3',
    username: 'wudaxun', // 123456
    password: 'b504bb94f881beb88c15c156b9123dbb98444ca055aa83f9c497153c6d195f0f',
    role: 2 // 管理员
  }
]

sql.insert(Admin, insertData).then(() => {
  console.log('插入成功')
})
