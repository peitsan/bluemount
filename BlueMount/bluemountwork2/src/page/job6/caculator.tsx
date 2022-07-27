//Authored by iiru
//powerby styled.js
import React  from "react";
import { MainContain,Monitor,Keyboard} from "./caculate";

export function Caculator() {

    interface numb{
        num:any
    }

    const AC =(props:any)=>{
        return(
            <button className={"square"} onClick={props.onClick}>AC</button>
        )
    }
    const Delete =(props:any)=>{
        return(
            <button className={"cubic"}  onClick={props.onClick}>清除</button>
        )
    }
    const Plus =(props:any)=>{
        return(
            <button className={"cubic"}  onClick={props.onClick}>+</button>
        )
    }
    const Sub =(props:any)=>{
        return(
            <button className={"cubic"}  onClick={props.onClick}>-</button>
        )
    }
    const Times =(props:any)=>{
        return(
            <button className={"cubic"}  onClick={props.onClick}>*</button>
        )
    }
    const Devide =(props:any)=>{
        return(
            <button className={"cubic"}  onClick={props.onClick}>/</button>
        )
    }
    const Equal =(props:any)=>{
        return(
            <button className={"square"}  onClick={props.onClick}>=</button>
        )
    }

    class Numb extends React.Component<any,numb> {
        constructor(props:any){
            super(props);
        }
        render() {
            return (
                <button className={"cubic"} onClick={this.props.onClick}>{this.props.numb}</button>
            )
        }
    }
    class Equation extends React.Component<any> {
        constructor(props:any){
            super(props);
            console.log(props)
        }
        render() {
            return (
                <span>{this.props.equation}</span>
            )
        }
    }
    class Formula extends React.Component<any> {
        constructor(props:any){
            super(props);

        }
        render() {
            return (
                <p className={"formula"} >{this.props.formula}</p>
            )
        }
    }
    class Caculators extends React.Component{

        private ans: { equation: number; formula: string };
        constructor(props:any){
            super(props);
            this.ans={
                formula:"hhhhh",
                equation: 0
            }
        }
        handleAC(){
            console.log("AC")
            this.ans.formula=""
            this.ans.equation= 0
            this.setState({})
        };
        handleDel(){
            this.ans.formula=this.ans.formula.substr(0,this.ans.formula.length - 1)
            this.setState({})
        };
        handleEqual(){
            this.ans.equation= eval((this.ans.equation?String(this.ans.equation):"0+")+this.ans.formula)
            this.ans.formula= " "
            this.setState({})
        };
        handle(e:any){
            console.log(typeof e)
            this.ans.formula=this.ans.formula+e;
            this.setState({})
        };

        render() {
            return (
                <MainContain>
                    {/*显示器*/}
                    <Monitor className={"monitor"}>
                        <Formula formula={this.ans.formula}></Formula>
                        <p className={'equation'}>
                            <span>= </span>
                            <Equation equation={this.ans.equation}></Equation>
                        </p>
                    </Monitor>
                    {/*键盘区*/}
                    <Keyboard className={"keyboard"}>
                        <AC onClick={() => this.handleAC()}></AC>
                        <Delete onClick={() => this.handleDel()}></Delete>
                        <Devide onClick={() => this.handle("/")}></Devide>

                        <Numb numb={"1"} onClick={() => this.handle("1")}></Numb>
                        <Numb numb={"2"} onClick={() => this.handle("2")}></Numb>
                        <Numb numb={"3"} onClick={() => this.handle("3")}></Numb>
                        <Times onClick={() => this.handle("*")}></Times>

                        <Numb numb={"4"} onClick={() => this.handle("4")}></Numb>
                        <Numb numb={"5"} onClick={() => this.handle("5")}></Numb>
                        <Numb numb={"6"} onClick={() => this.handle("6")}></Numb>
                        <Plus onClick={() => this.handle("+")}></Plus>

                        <Numb numb={"7"} onClick={() => this.handle("7")}></Numb>
                        <Numb numb={"8"} onClick={() => this.handle("8")}></Numb>
                        <Numb numb={"9"} onClick={() => this.handle("9")}></Numb>
                        <Sub onClick={() => this.handle("-")}></Sub>

                        <Numb numb={"."} onClick={() => this.handle(".")}></Numb>
                        <Numb numb={"0"} onClick={() => this.handle("0")}></Numb>
                        <Equal onClick={() => this.handleEqual()}></Equal>

                    </Keyboard>
                </MainContain>  )
        }
    }

    return (
        <>
            <Caculators></Caculators>
        </>
    );
};
