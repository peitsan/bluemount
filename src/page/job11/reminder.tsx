//Authored by iiru
//powerby styled.js

import React ,{useState,useEffect}from "react";
import moment from "moment";
import { MainContain,MainContent} from "./remind";
import { Button ,Table } from 'antd'
import axios from "axios"
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
interface loginParams {
       username:string |null
        password:string |null
}
const loginParam = {
        username:'wudaxun',
        password:'b504bb94f881beb88c15c156b9123dbb98444ca055aa83f9c497153c6d195f0f'
    }
const addParam:any = {content:'xxxx',date:new Date()}

export function Reminder(){

const Login = ()=>{
     Promise.resolve(
        axios.post('/api/login',loginParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//取
const GetReminderData = ()=>{

  Promise.resolve(
       axios.get('/api/getAllReminder')
    ).then((res)=>{
        if(res.status === 200 ||res.status ===304) {
            loadData(res.data)
        }
    })
}
//一组CURD
//增
const AddReminderData = ()=>{
    Promise.resolve(
       axios.post('/api/addReminder',addParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//删
const DelReminderData = ()=>{
    Promise.resolve(
       axios.post('/api/deleteReminder',addParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//查
const FindReminderData = ()=>{
    Promise.resolve(
       axios.post('/api/findReminder',addParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//改
const UpdateReminderData = ()=>{
    Promise.resolve(
       axios.post('/api/updateReminder',addParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//标序
const dateFormater= (e:any) => {
	return e ? moment(e).format('MMMM Do YYYY, h:mm a') : ''
}
const columns: ColumnsType<DataType> = [
  {
    title: '序号',
            align: "center",
            width: 60,
            dataIndex: 'num',
            key: 'num',
          render: (text, record, index) => `${(pageOption.pageNo - 1) * 8 + (index + 1)}`,
            //${} 中可以放入JS表达式；``是模板字符串，可以在里面加变量
  },
  {
    title: '日期',
    align: "center",
    dataIndex:'date',
    render:(text) =>{
        return <span>{moment.locale(moment(text).format('MMMM Do YYYY,a h:mm'))} </span>
    },
    width: 150,
  },
  {
    align: "center",
    title: '笔记',
    width: 200,
    dataIndex: 'content',
  },
  ];
//分页
const [pageOption, setPageOption] = useState({
    pageNo: 1,  //当前页为1
    pageSize: 8, //一页8行
  })
const paginationChange = async (current:any, size:any) => {
    //前面用到useState
    setPageOption({
      pageNo: current, //当前所在页面
      pageSize: size,  //一页有几行
    })
  }
const paginationProps = {
    current: pageOption.pageNo,
    pageSize: pageOption.pageSize,
    onChange: (current:any, size:any) =>
    paginationChange(current, size)
  }
const [ Data, setData ] = useState([]);
const loadData =(e:any)=>{setData(e)}

useEffect(()=>{GetReminderData()},[]);
    return (
          <>
             <MainContain>
                 <MainContent>
                     <Button onClick={()=>{GetReminderData()}}>测试</Button>
                      <Button onClick={()=>{Login()}}>登录</Button>
                     <Button onClick={()=>{AddReminderData()}}>新增</Button>
                      <Table
                        size='small'
                        dataSource={Data}
                        columns={columns}
                        //引入分页API
                        pagination={paginationProps}
                      >

                      </Table>
                 </MainContent>
             </MainContain>
          </>
    )
};
