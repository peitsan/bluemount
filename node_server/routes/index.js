var express = require('express');
var router = express.Router();
var Reminder = require('../sql/models/reminder')
/* 这是用户登录的接口*/
const sql = require('./../sql');
const Admin = require('./../sql/interface/admin');
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
	let delete_key = req.body
	Reminder.deleteOne(delete_key, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
});
// 按日期范围查找 findReminderRange
router.post('/findReminderRange', (req, res, next) => {
	console.log(res.body)
	let start_date = req.body.value[0];
	let end_date = req.body.value[1];
	Reminder.find({ $and:[{ date: { $gte: start_date } }, { date: { $lte: end_date } }] },(err,result) => {
			if(err){console.log(err)
				res.send({
				  code: 500,
				  msg: '查询失败'
				})}
			else{
				res.send({
					code: 200,
					msg: '查询成功',
					result
				  })
			}
		});
});
// 按关键词查找 findReminder
router.post('/findReminder', (req, res, next) => {
	const txt =  new RegExp(req.body.content, 'i');
	Reminder.find({content:{$regex: txt}}, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
});
// 更新 updateReminder
router.post('/updateReminder', (req, res, next) => {
	Reminder.updateOne({_id:req.body._id},{content:req.body.content}, (err, result) => {
		if (err) {
			console.log(err)
		}else {
			res.json(result);
		}
	});
});

module.exports = router;
