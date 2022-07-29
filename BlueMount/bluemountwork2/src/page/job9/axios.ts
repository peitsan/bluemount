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
    baseUrl:"http://cqupt.sunshin.club",
    contentType: 'application/json;charset=utf-8'
}
//Ajax Post封装
export const Post=(props:normalPost)=>{
     const  post = async (params:any)=>{
            try{
                let res = await httpReq({
                    method:"post",
                    url:params.url,
                    data:params.data,
                    resMethod: "json" })
                return res;
            }catch{
                console.log("请求返回出错!")
            }
        }
    return post(props)
}
//Ajax Get异步封装
export const Get=({url,data}:normalPost)=>{
    return  async ()=>{
        try{
            let res = await httpReq({
                method:"get",
                url:url,
                data:data,
                resMethod: "json" })
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
            let res = await httpReq({
                method:"put",
                url:url,
                data:data,
                resMethod: "json" })
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
                resMethod: "json" })
            return res;
        }catch{
            console.log("请求返回出错!")
        }
    }
}
export const httpReq = ({method, url, data, resMethod}:XHR) =>{
    let that:any = this;
    //请求函数封装
    const req =({method, url, data, resMethod}:XHR)=>{
        //实例化XMLHttpRequest对象
        const request = new XMLHttpRequest();
        request.open(method,
            baseConfig.baseUrl+url)
        request.responseType = resMethod;
        if (method === 'get') {
            request.send(data);
        } else {
            request.setRequestHeader("Content-Type", baseConfig.contentType);
            request.send(JSON.stringify(data));
        }
        console.log(request.responseXML)
        return  request.responseXML;
    }
    return new Promise((resolve, reject)=> {
      //拦截器
            const res=()=>{
                console.log(that)
                if (that.readyState !== 4 ) return;
                if (that.status === 200) resolve(that.response)
                else reject(new Error(that.statusCode))
            }

            res()
        }
    ).then(
        //确保异步请求
        ()=>req({method, url, data, resMethod})
    )
}
