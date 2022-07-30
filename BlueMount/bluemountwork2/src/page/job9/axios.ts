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
    contentType: 'application/json;charset=utf-8'
}
//Ajax Post封装
export const Post=(props:normalPost)=>{
     const  post = async (params:any)=>{
            try{
                let res:any = await httpReq({
                    method:"post",
                    url:params.url,
                    data:(typeof params.data === "string")?params.data:JSON.stringify(params.data),
                    resMethod:''})
                return (typeof res === "object")?res:JSON.parse(res);
            }catch{
                console.log("请求返回出错!")
            }
        }
    return post(props)
}
//Ajax Get异步封装
export const Get=(props:normalPost)=>{
    const  get = async (params:any)=>{
        try{
            let res:any = await httpReq({
                method:"get",
                url:params.url,
                data:params.data,
                resMethod:''})
            return (typeof res === "object")?res:JSON.parse(res);
        }catch{
            console.log("请求返回出错!")
        }
    }
    return get(props)
}
//Ajax Put异步封装
export const Put=(props:normalPost)=>{
    const  put = async (params:any)=>{
        try{
            let res:any = await httpReq({
                method:"put",
                url:params.url,
                data:params.data,
                resMethod:''})
            return (typeof res === "object")?res:JSON.parse(res);
        }catch{
            console.log("请求返回出错!")
        }
    }
    return put(props)
}
//Ajax Delete异步封装
export const Delete=(props:normalPost)=>{
    const  del = async (params:any)=>{
        try{
            let res:any = await httpReq({
                method:"delete",
                url:params.url,
                data:params.data,
                resMethod:''})
            return (typeof res === "object")?res:JSON.parse(res);
        }catch{
            console.log("请求返回出错!")
        }
    }
    return del(props)
}
export const httpReq = function (props:XHR){
    const promise=(e:any)=>new Promise((resolve, reject)=> {
      const callBack=(e:any)=>{
          if (e.readyState !== 4 ) return;
          if (e.status === 200) resolve(e.response)
          else reject(new Error(e.statusCode))
          return Promise
      }
        //请求函数封装
        const req =(props:XHR)=>{
            //实例化XMLHttpRequest对象
            const request = new XMLHttpRequest();
            request.withCredentials = true;
            request.open(props.method,
                baseConfig.baseUrl+props.url,
                true)
            request.responseType = props.resMethod;

            if (props.method === 'get') {
                request.send(props.data);
            } else {

                request.setRequestHeader("Content-Type", baseConfig.contentType);
                request.send(props.data)
            }
            request.onreadystatechange =()=> callBack(request);
        }
        req(e);
    })

    return promise(props)
}
