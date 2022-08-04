//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,MainContent} from "./remind";
// import {User} from ".data/store"
import {ReminderDetail} from "./data/store"

//增、
const addReminder = () => {
    var noteAdd = new ReminderDetail ({
        username: 'admin',
        password: '123456',
        email: 'xiaochen@qq.com'
    });
    noteAdd.save(function (err, ret) {
        if (err) {
            console.log('保存失败');
        } else {
            console.log('保存成功');
            console.log(ret);
        }
    });

}
//删
const delReminder = (id:any) => {
    const callback =()=>{
        console.log("remove reminder" + id)
    }
    ReminderDetail.findByIdAndRemove(id,callback);
}
//查
// 根据条件查询
const optReminder = () => {
    ReminderDetail.find({username: 'xiaoxiao'}, (err:any, ret:any)=>{
        if (err) {
            console.log('查询失败');
        } else {
            console.log(ret);
        }
    });
}
// 按照条件查询单个，查询出来的数据是一个对象（{}）
// 没有条件查询使用findOne方法，查询的是表中的第一条数据
//      const optaReminder = () => {
//          ReminderDetail.findOne({
//              status: '1'
//          },(err:any, ret:any)=>{
//              if (err) {
//                  console.log('查询失败');
//              } else {
//                  console.log(ret);
//              }
//          });
//      }
//改
const updateReminder = () => {
    ReminderDetail.remove(conditions, doc, [options], [callback]);
}
export function Reminder(){

     return (
          <>
             <MainContain>
                 <MainContent
                 >
                 </MainContent>
             </MainContain>
          </>
    )
};
