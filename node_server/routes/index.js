var express = require('express');
var router = express.Router();
var Reminder = require('../sql/models/reminder')
/* 这是用户登录的接口*/
const sql = require('./../sql');
const Admin = require('./../sql/col/Admin');
const crypto = require('crypto');
router.post('/login', (req, res, next) => {
	/* 获取请求数据*/
  let { username, password } = req.body;
  /* 这是加密算法因为数据库中存储的都是加密文件*/
  password = crypto.createHmac('sha256', password)
    .update('I love 🐶')
    .digest('hex');
	/* 然后在数据库中查找看是否具有这个用户名和密码*/
  sql.find(Admin, { username, password }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      res.send({
        code: '10010',
        message: '登录信息有误'
      })
    } else {
      res.send({
        code: '10101',
        message: '登录成功',
        data: {
          role: data[0].role
        }
      })
    }
  })
})

router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'React TodoList'
	});
});

// 获取全部的todo
router.get('/getAllReminder', (req, res, next) => {
	Reminder.find({}).sort({'date': -1}).exec((err, todoList) => {
		if (err) {
			console.log(err);
		}else {
			res.json(todoList);
		}
	})
});

// 添加todo
router.post('/addReminder', (req, res, next) => {
	let newItem = req.body;
	console.log(req)
	Reminder.create(newItem, (err) => {
		if (err) {
			console.log(err);
		}else {
			Reminder.find({}, (err, todoList) => {
				if (err) {
					console.log(err);
				}else {
					res.json(todoList);
				}
			});
		}
	})
})

// 删除todo
router.post('/deleteReminder', (req, res, next) => {
	console.log(typeof req.body);
	let delete_key = req.body
	Reminder.deleteOne(delete_key, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
});

// 按关键词查找 findReminder
router.post('/findReminder', (req, res, next) => {
	console.log(req.body);
	let delete_date = req.body
	Reminder.remove(delete_date, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
});
// 更新 updateReminder
router.post('/updateReminder', (req, res, next) => {
	console.log(req.body);
	let delete_date = req.body.date
	Reminder.remove({date: delete_date}, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
});

module.exports = router;
