//Authored by iiru
//powerby styled.js
//Cite with https://juejin.cn/post/7069805387490263047
import React from "react";
import { Button, Modal } from 'antd';
import {MainContain,MainContent} from "./promise";
//重新封装自制的 Promise.All方法
class myPromise{
    static MyAll(method:any){
        return new Promise((resolve, reject)=>{
            let arr:any = [];
            console.log(method);
            method.forEach((item:any, id:any)=>{
                Promise.resolve(item).then(res=>{
                        arr[id] = res;
                        if (arr.length === method.length)
                        {
                            resolve(arr)
                            console.log(arr);
                        }
                    }
                ).catch(reject)
            })

        })
    }
}

export function PromiseAll(){
    //定义三个Promise方法
    const mise1 =  Promise.resolve("test resolve").then(()=>console.log("mise1"))
    const mise2 = new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve('test resolve,reject');
            console.log("mise2")
        }, 2000)

    })
    const mise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('test reject,resolve')
            console.log("mise3")
        },3000)
     }
    )

    //对三个Promise函数用封装好的MyAll调用  MyAll方法封装在myPromise类里面
    const MyPromise =()=> myPromise.MyAll([mise1,mise2,mise3])
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [response,setResponse] = React.useState("");

    const showModal = (e:any) => {
        setResponse(e);
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
            <>
                <MainContain>
                    <MainContent>
                        {/*异步调取弹窗*/}
                        <Button onClick={()=> {
                            MyPromise().then(
                                r=>showModal(r))
                        }} >点击触发MyPromiseAll
                        </Button>
                        <Modal title="PromiseALL Methods Return"
                               visible={isModalVisible}
                               onOk={handleOk}
                               onCancel={handleCancel}>
                            {response}
                        </Modal>
                    </MainContent>
                  </MainContain>
            </>
    )
};
