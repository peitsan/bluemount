//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,MainContent} from "./axios";
import {Post} from "./axios"
import {Input,Button,InputRef,message} from "antd";


interface Login {
    mail: string|InputRef|null;
    password: string|InputRef|null;
}
//页面组件
export function Async(){
    //封装请求参数:
    const loginData:Login = {
        mail:"reality3iiru@163.com",
        password:"BLmfDJ8w5X"
    }
        //  mail:"reality3iiru@163.com",
        // password:"BLmfDJ8w5X"
    //请求二次封装
    const loginPost= (e:any) => Post({url:"/login",data:e})
    //登录按钮函数
    const Submit=(e:any)=>{
        //封装请求参数
        const loginParmas ={
            mail:e.mail.input.value,
            password:e.password.input.value}
        const tips=(data:any,e:any)=>{
                if(e.code === 200)  message.success("Hello！"+data.mail.input.value)
            else if(e.Code === 400) message.error("Sorry,Please Input Create Mail Account!")
                else message.error("Sorry,Login Failed!")
        }
        Promise.resolve(
            //异步执行请求并取得返回体
            loginPost(loginParmas))
            .then(
                (res)=>{
                    tips(e,res)
                }
            )



    }
    return (
            <>
                <MainContain>
                    <MainContain>
                        <MainContent>
                            <Input className={"Inputy"} placeholder="input account"  ref={input => loginData.mail = input} />
                            <Input.Password className={"Inputy"} placeholder="input password"  ref={input => loginData.password = input} />
                            <Button className ={"submitbtn"}  onClick={()=>Submit(loginData)}>登录</Button>
                        </MainContent>
                    </MainContain>
                </MainContain>
            </>
    );
}
