//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,MainContent} from "./bounce";
import { Input,Button,InputRef,message} from 'antd';

//输入框接口
interface Login {
    account: string|InputRef|null;
    password: string|InputRef| null;
}
//防抖函数
const debounce=(func:any, delay:number)=>{
    let timer: NodeJS.Timeout | null;
    return ()=>{
        let context = this;
        if(timer) clearTimeout(timer);
        timer = setTimeout(  function(){
            func.apply(context,arguments);
        },delay)
    }
}

//页面组件通过Button和Input调用防抖函数
export function Debounce(){
     const loginData:Login = {
        account: ' ',
        password:' '
    }
    const tips=(e:any)=>{
         console.log(e)
        if(e.account.input.value && e.password.input.value ) message.success("Hello！"+e.account.input.value)
        else if(!e.account.input.value) message.error("No focus account!")
        else if(!e.password.input.value) message.error("No focus password!")
}

    const submit:() => void =debounce(()=>tips(loginData),3000)
    return (
          <>
             <MainContain>
                 <MainContent
                 >
                        <Input className={"Inputy"} placeholder="input account"  ref={input => loginData.account = input} />
                        <Input.Password className={"Inputy"} placeholder="input password"  ref={input => loginData.password = input} />
                        <Button onClick={submit}>登录</Button>
                 </MainContent>
             </MainContain>
          </>
    )
};
