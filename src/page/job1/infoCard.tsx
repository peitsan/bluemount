import React from "react";
import  Card  from "./component/Card";
export const InfoCard:React.FC = () => {
        return(
            <>
                <div className={"wrapper"}>
                <Card    title={"连接"}
                         subtitle={"ZENHOMECLOUD"}
                         border={false}
                         borderColorDeep={"#3d64ff"}
                         borderColorLight={"#358aff"}
                         paragraph={"打破企业间壁垒、提供便捷的接入方式,实现不同企业、不同品牌、不同类型间的家电数据互联互通与数据协同"}
                         imageSrc={"logo.jpg"}
                ></Card>
            </div>
            </>

       )
    }




