//Authored by iiru
//powerby styled.js
//基础样式
import styled from "styled-components";
export const MainContain =styled.div`
   width:1440px;
   height:666px;
   margin:2%;
   padding:1% 1% 1% 2.5%;
   background-image: radial-gradient(#B86D1E,#7B4914);
    .blackboard{
      width:98%;
      height:98%;
       background-image:radial-gradient(#536E4F,#415E40,#20381E);
      }
    `
export const MainContent =styled.div`
     margin:4% 45%;
     width:200px;
     float:right;
     font-size:32px;
     color:#efefef;
  
`
//请求参数
interface normalPost {
    url:string;
    data:any;
}
//请求体封装
interface XHR {
    method:string;
    url:string;
    data:any;
    resMethod:any;
}
//请求api域名Url
const baseConfig:any = {
    baseUrl:"http://cqupt.sunshin.club/api",
    // contentType: 'application/json;charset=utf-8'
    contentType: 'application/json'
}
//Ajax Post封装
export const Post=(props:normalPost)=>{
        // console.log(this)  //window
     const  post = async (params:any)=>{
            try{
                let res = await httpReq({
                    method:"post",
                    url:params.url,
                    data:params.data,
                    resMethod:''})
                console.log(res);
                return res;
            }catch{
                console.log("请求返回出错!")
            }
        }
     post(props)
}
//Ajax Get异步封装
export const Get=({url,data}:normalPost)=>{
    return  async ()=>{
        try{
            let res = await httpReq({
                method:"get",
                url:url,
                data:data,
                resMethod:'' })
            return res;
        }catch{
            console.log("请求返回出错!")
        }
    }
}
//Ajax Put异步封装
export const Put=({url,data}:normalPost)=>{

    return  async ()=>{
        try{
            let res = await httpReq( {
                method:"put",
                url:url,
                data:data,
                resMethod: '' })
            return res;
        }catch{
            console.log("请求返回出错!")
        }
    }
}
//Ajax Delete异步封装
export const Delete=({url,data}:normalPost)=>{
    return  async ()=>{
        try{
            let res = await httpReq({
                method:"delete",
                url:url,
                data:data,
                resMethod:''})
            return res;
        }catch{
            console.log("请求返回出错!")
        }
    }
}
export const httpReq = function (props:XHR){

    const promise=(e:any)=>new Promise((resolve, reject)=> {

      const callBack=(request:any)=>{
          let  e = request.responseXML
          if (e.readyState !== 4 ) return;
          if (e.status === 200) resolve(e.response)
          else reject(new Error(e.statusCode))
      }
        //请求函数封装
        const req =(props:XHR)=>{
            //实例化XMLHttpRequest对象
            //@ts-ignore
            const request = new XMLHttpRequest();
            request.withCredentials = true;
            request.open(props.method,
                baseConfig.baseUrl+props.url,
                true)
            request.responseType = props.resMethod;
            console.log(request)
            if (props.method === 'get') {
                request.send(props.data);
            } else {

                request.setRequestHeader("Content-Type", baseConfig.contentType);
                console.log(props.data)
                request.send(props.data)
            }
            let res = request.responseXML
            request.onreadystatechange =()=> callBack(res);
        }
        req(e);
    })

    return promise(props)
}
