//Authored by iiru
//powerby styled.js
import React from "react";
// import { Link} from "react-router-dom";
import { MainContain,Tarbar,Notice} from "./note";
import { Input} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
export function Notebook(){
    class noteData {
        notice:string;
        status:Number;
        constructor(notice:string,
                   status:Number) {
          this.notice = notice ;
          this.status = status ;
        }
    }
    var dataList:noteData[] = [
         new noteData("下午吃饭饭",1),
         new noteData("吃完睡觉觉",0)
    ]

    const dataListCombine: any  = document.getElementById('notice')
    var addNote:HTMLInputElement = document.querySelector('#tarbar.input') as HTMLInputElement
    // var submitNote = document.getElementById('noteSubmit')
    var submitNote = document.querySelector('#submit') as HTMLElement

    function renderList () {
        let list = ''
        if (dataList.length > 0) {
            dataList.forEach((item, index) => {
                list += `<ul class="${item.status ? 'item-ok': ''}">${item.notice}</>`
            })
        }
        else {
            list = '<li>暂无待办</li>'
        }
            dataListCombine.innerHTML =list
    }

// 添加代办
    function addTodo() {
        var text = addNote.value;
        if (text === '') {
            return
        }
        dataList.push( new noteData(text, 0))
        addNote.value = '' // 把input框清空
        renderList() // push之后重新渲染一下
    }

    submitNote.onclick = function () {
        addTodo()
    }

    window.onload = function() {
        renderList()
    }
   // var addNoticeRow = React.createClass({
    //     render: function() {
    //         return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    //     }
    // });
    // var dataList = [
    //     {notice: '今天去吃饭', status: '0'},
    //     {notice: '吃完吃雪糕', status: '1'}
    // ];
    var Noticeover : React.FC = ()=>(
        <Notice>
            <div className={"noteover"}>
                <CheckOutlined className={"check"}>

                </CheckOutlined>
                <span className={"notice"}>
                    xxxxxxxxxxxxxxx
               </span>
                <CloseOutlined className={"delete"}>
                </CloseOutlined>
            </div>

        </Notice>
    )
    var Noticefirst : React.FC = ()=>(
        <Notice>
            <div className={"notefirst"}>
            <span className={"check"}> </span>
            <span className={"notice"}>
                    xxxxxxxxxxxxxxx
            </span>
            <CloseOutlined className={"delete"}>

            </CloseOutlined>
            </div>
        </Notice>
    )
    var Noticethen : React.FC = ()=>(
        <Notice>
            <div className={"notethen"}>
                <span className={"check"}> </span>
                <span className={"notice"} id={'dataList'}></span>
                <CloseOutlined className={"delete"}>
                </CloseOutlined>
            </div>
        </Notice>
    )

    return (
        <>
            <MainContain>
                <div className={"tarbar"}>
                        <Tarbar>
                           <div className={"title"}>My To Do List</div>
                            <div className={"inputbox"}>
                                <Input id={'noteInput'} className={"input"} type="text" placeholder={"记录一下"}></Input>
                                <button  id='noteSubmit' className={'submit'}>Add</button>
                            </div>
                        </Tarbar>
                </div>
                <div className={"content"}>
                 <ul id={"notice"}></ul>
               </div>
            </MainContain>
        </>
    );
};
