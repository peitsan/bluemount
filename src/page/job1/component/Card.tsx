import React from "react";
import { CardWrapper,CardTop,CardMessage} from "./CardPart"
interface MyCard {
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    paragraph?: string | React.ReactNode;
    border?: boolean;
    imageSrc?:string ;
    borderColorDeep?:string;
    borderColorLight?:string;
}
const Card:React.FC<MyCard> =(props)=> {
    const Shadow = typeof props.border === "undefined"?true:props.border
    const DpColor = props.borderColorDeep || '#0560f0'
    const LtColor = props.borderColorLight || '#0560f0'
    let imgName = props.imageSrc
    return (
        <CardWrapper>
            <CardTop border={Shadow} borderColorDeep={DpColor} borderColorLight={LtColor}>
                    <div className={"main"} >
                        <img className = {"imgStyle"}
                             src={require('../../../assets/img/'+imgName)} alt={""}/>
                    </div>
                    <div className={"subMain"}>
                        <div className = {"mainTitle"}>  { props.title }</div>
                        <hr className =  {"shortLine"} color={"#c2d7fe"} />
                        <div className = {"subTitle"}>   { props.subtitle }</div>
                    </div>
            </CardTop>
            <CardMessage>
                <div  className ={"message"}>
                    { props.paragraph}
                </div>
            </CardMessage>
        </CardWrapper>
    )
}
export default Card

// Authored by iiru
// Cite With 爱放屁的菜鸟
// url:https://www.cnblogs.com/fczbk/p/16166481.html