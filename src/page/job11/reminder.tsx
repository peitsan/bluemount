//Authored by iiru
//powerby styled.js

import React from "react";
import { MainContain,MainContent} from "./remind";
// import {ReminderDetail} from "./data/store"
//
// //增、
// const addReminder = () => {
//     var noteAdd = new ReminderDetail ({
//         username: 'admin',
//         password: '123456',
//         email: 'xiaochen@qq.com'
//     });
//     noteAdd.save(function (err:any, ret:any) {
//         if (err) {
//             console.log('保存失败');
//         } else {
//             console.log('保存成功');
//             console.log(ret);
//         }
//     });
//
// }
// //删
// const delReminder = (id:any) => {
//     const callback =()=>{
//         console.log("remove reminder" + id)
//     }
//     ReminderDetail.findByIdAndRemove(id,callback);
// }
// //查
// // 根据条件查询
// const optReminder = () => {
//     ReminderDetail.find({username: 'xiaoxiao'}, (err:any, ret:any)=>{
//         if (err) {
//             console.log('查询失败');
//         } else {
//             console.log(ret);
//         }
//     });
// }
// //改
// // const updateReminder = () => {
// //     ReminderDetail.remove(conditions, doc, [options], [callback]);
// // }
export function Reminder(){

     return (
          <>
             <MainContain>
                 <MainContent>
                 </MainContent>
             </MainContain>
          </>
    )
};
