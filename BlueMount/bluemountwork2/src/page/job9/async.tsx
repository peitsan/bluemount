//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,MainContent} from "./axios";
import {Post} from "./axios"
import {Input,Button,InputRef,message} from "antd";


interface Login {
    account: string|InputRef|null;
    password: string|InputRef| null;
}
//页面组件
export function Async(){
    //数据库
    const loginData:Login = {
        account:" ",
        password:" "
    }
    //请求二次封装
    const loginPost= (e:any) => Post({url:"/login",data:e})
    //登录按钮函数
    const Submit=(e:any)=>{
        const tips=(data:any,e:any)=>{
            if(e.Code === 200){
                message.success("Hello！"+data.account.input.value)
            }
            else message.error("Sorry,Login Failed!")
        }
        let res = loginPost(e)
        console.log(res) //调试;
        tips(e,res)
    }
    return (
            <>
                <MainContain>
                    <MainContain>
                        <MainContent>
                            <Input className={"Inputy"} placeholder="input account"  ref={input => loginData.account = input} />
                            <Input.Password className={"Inputy"} placeholder="input password"  ref={input => loginData.password = input} />
                            <Button className ={"submitbtn"}  onClick={()=>Submit(loginData)}>登录</Button>
                        </MainContent>
                    </MainContain>
                </MainContain>
            </>
    );
}
