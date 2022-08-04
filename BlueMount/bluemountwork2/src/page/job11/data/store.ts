export
// 1.引包
// 注意：按照后才能require使用
var mongoose = require('mongoose');

// 拿到schema图表
var Schema = mongoose.Schema;

// 2.连接数据库
// 指定连接数据库后不需要存在，当你插入第一条数据库后会自动创建数据库
mongoose.connect('mongodb://localhost:27017/reminder');

// 3.设计集合结构（表结构）
// 用户表
var userSchema = new Schema({
    username: { //姓名
        type: String,
        require: true //添加约束，保证数据的完整性，让数据按规矩统一
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
});
var reminderDetail = new Schema({
    notes: { //备忘录内容
        type: String,
        require: true //添加约束，保证数据的完整性，让数据按规矩统一
    },
    status: { //状态码
        type: String,
        require: true //添加约束，保证数据的完整性，让数据按规矩统一
    },
    id: { //序号
        type: String,
        require: true //添加约束，保证数据的完整性，让数据按规矩统一
    },
    startTime: { //记录时间
        type: String,
        require: true //添加约束，保证数据的完整性，让数据按规矩统一
    },
    deadline: { //截止时间
        type: String,
        require: true //添加约束，保证数据的完整性，让数据按规矩统一
    },
});
// 4.将文档结构发布为模型
// mongoose.model方法就是用来将一个架构发布为 model
// 		第一个参数：传入一个大写名词单数字符串用来表示你的数据库的名称
// 					mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
// 					例如 这里会变成users集合名称
// 		第二个参数：架构
// 	返回值：模型构造函数
export var User = mongoose.model('User', userSchema);
    export var ReminderDetail = mongoose.model('ReminderDetail', reminderDetail);