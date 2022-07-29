//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,MainContent} from "./bounce";
import { Input,InputRef,message} from 'antd';

//ts接口申明类型
// interface DebounceParams {
//     func: any;
//     delay: any;
// }
interface Login {
    account: string|InputRef|null;
    password: string|InputRef| null;
}


// const debounceInput = (e:any)=>{
//     debounce({func:console.log(e),delay:1000})
// }
// const Inputy:any =document.querySelector("#Inputy")
// Inputy.addEventListener('keyup', function (e:any)  {
//     debounceInput(e.target.value)
// })



// 防抖函数
// const debounce = ({func, delay}: DebounceParams) =>{
// const debounce = (func:any, delay:any) =>{
//     let timer: NodeJS.Timeout | null;
//
//     return function(){
//         console.log("1")
//         // @ts-ignore
//         let context = this;
//         let _args = arguments;
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(  function(){
//             func.apply(context,_args);
//         },delay)
//
//     }
// }
function debounce(func:any, delay=6000){
    let timer: NodeJS.Timeout | null;
    return function(){
        // @ts-ignore
        let context = this;
        let _args = arguments;
        if(timer) clearTimeout(timer);
        timer = setTimeout(  ()=>{
            func.apply(context,_args);
        },delay)

    }
}


export function Debounce(){
     const loginData:Login = {
        account: ' ',
        password:' '
    }
    const tips=()=>{
         console.log("1")
        let e:any = loginData
        if(e.account.input.value && e.password.input.value ) message.success("Hello！"+e.account.input.value)
        else if(!e.account.input.value) message.error("No focus account!")
        else if(!e.password.input.value) message.error("No focus password!")
}
//     const Submit=()=>debounce(console.log("1"))
    //提交函数
    // const Submit=(e:any)=>{
    //     const tips=()=>{
    //         if(e.account.input.value && e.password.input.value ){
    //             message.success("Hello！"+e.account.input.value)
    //
    //         }
    //         else if(!e.account.input.value) message.error("No focus account!")
    //         else if(!e.password.input.value) message.error("No focus password!")
    //     }
    //
    // }
    // const btn:any = document.getElementById('submitbtn');
    // btn.onSubmit=debounce(tips,1000)
    const submit=debounce(tips,1000)
    return (
          <>
             <MainContain>
                 <MainContent
                 >
                        <Input className={"Inputy"} placeholder="input account"  ref={input => loginData.account = input} />
                        <Input.Password className={"Inputy"} placeholder="input password"  ref={input => loginData.password = input} />
                        <Input id ={"submitbtn"} type={"submit"} onClick={submit}>登录</Input>
                 </MainContent>
             </MainContain>
          </>
    )
};
