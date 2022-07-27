//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,Tarbar,Notice} from "./note";
import { Input} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
export function Notebook(){
    class noteData {
        notice:string
        status:number
        key:string
        constructor(notice:string,
                    status:number,
                    key:string) {
            this.notice = notice ;
            this.status = status ;
            this.key = key
        }
    }   //database类
    // const detele=(sort:number)=>{
    //     let temp = this.state.dataList.splice(sort,1)
    //     this.setState({dataList:temp})
    // }
    const Notices:any =(props:any)=>{

        switch(props.status){
            case 0: return (
                <>
                    <Notice>
                        <div className={"notethen"} >
                            <span className={"check"}>
                            </span>
                            <span className={"notice"}  onClick={props.onOver(props.sort)}>
                                {props.notice}
                            </span>
                            <CloseOutlined className={"delete"} onClick={props.onDel(props.sort)}>
                            </CloseOutlined>
                        </div>
                    </Notice>
                </>
            )
            case 1: return (
                <>
                    <Notice>
                        <div className={"notefirst"}>
                            <span className={"check"}>
                            </span>
                            <span className={"notice"}  onClick={props.onOver(props.sort)}>
                             {props.notice}
                            </span>
                            <CloseOutlined className={"delete"} onClick={props.onDel(props.sort)}>
                            </CloseOutlined>
                        </div>
                    </Notice>
                </>
            )
            case 2: return (
                <>
                    <Notice>
                        <div className={"noteover"}>
                            <CheckOutlined className={"check"} >
                            </CheckOutlined>
                            {/*<span className={"notice"} onClick={props.onOver(props.sort)}>*/}
                            <span className={"notice"} >
                                {props.notice}
                             </span>
                            <CloseOutlined className={"delete"} onClick={props.onDel(props.sort)}>
                            </CloseOutlined>
                        </div>
                    </Notice>
                </>
            )
            default:break;
        }
    }   //笔记条样式 及逻辑

    class Notes extends React.Component<any, {dataList:noteData[],temp:string}>{
        constructor(props:any) {
            super(props);
            this.state = {
                dataList:[
                 {notice: '今天去吃饭', status:0 ,key:"sub-0-1"},   //状态码0 未完成
                 {notice: '吃完吃雪糕', status:1 ,key:"sub-0-2"},   //状态码1 亟待完成
                 {notice: '吃完吃雪糕', status:2 ,key:"sub-0-3"},     //状态码2 已完成
                ],
                temp:' '
            }
        }
        handlerDel=(sort:any)=>{
            return ()=>{
                let tempList =  this.state.dataList.slice(0, parseInt(sort)).concat(this.state.dataList.slice(parseInt(sort) + 1, this.state.dataList.length))
                this.setState({dataList:tempList})
            }
        }

        handleOver=(sort:any)=>{
            let tempL = this.state.dataList;

            if(this.state.dataList[sort].status === 0){
                tempL[sort].status = 1;
                console.log(tempL)
                return ()=>{
                    this.setState({dataList:tempL})
                }
            }
            else if(this.state.dataList[sort].status === 1){
                tempL[sort].status = 2;
                return ()=>{
                    this.setState({dataList:tempL})
                }
            }
            else if(this.state.dataList[sort].status === 2){
                tempL[sort].status = 0;
                return ()=>{
                    this.setState({dataList:tempL})
                }
            }
        }
        inputRender=(e:any)=>{
            this.setState({dataList:this.state.dataList,temp:e.target.value})

        }
        addNote=()=>{
            if (this.state.temp === ' ') {
                return
            }
            this.state.dataList.push( new noteData(this.state.temp,0,"sub-1-"+(this.state.dataList.length+1)))
            this.setState({temp : ' '} )// 把input框清空;
        }
        render() {
            return(
                <>
                    <MainContain>
                        <div className={"tarbar"}>
                            <Tarbar>
                                <div className={"title"}>My To Do List</div>
                                <div className={"inputbox"}>
                                    <Input className={"input"} type="text" placeholder={"记录一下"} value={this.state.temp} onChange={(e)=>this.inputRender(e)}/>
                                    <button onClick={() =>{
                                        this.addNote()
                                    }} className={'submit'}>Add</button>
                                </div>
                            </Tarbar>
                        </div>
                        <div className={"content"}>
                            {this.state.dataList.map((item,noteid)=>{
                                return (
                                    <Notices key={item.key}
                                             notice={item.notice}
                                             status={item.status}
                                             sort={String(noteid)}
                                             onDel={this.handlerDel}
                                             onOver={this.handleOver}>
                                    </Notices>
                                )
                            })}
                        </div>
                    </MainContain>
                </>
            )
        }

    }
    return (
      <>
          <Notes></Notes>
      </>
    );
};
