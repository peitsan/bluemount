//Authored by iiru
//powerby styled.js
import React from "react";
import { Link} from "react-router-dom";
import { MainContain,Tarbar,Container} from "./component/img";
import { SearchOutlined } from "@ant-design/icons";
export function ImgLayout(){
    return (
        <>

               <MainContain>
                   <div className={"Margin"}>
                       <div className={"tarbar"}>
                           <Tarbar>
                               <img src={require("../../assets/img/logo.jpg")}></img>
                               <div className={"Navigate"}>
                                      <div className={"Navi"}>
                                            <span>
                                                <Link to='/home'>HOME</Link>
                                            </span>
                                       </div>
                                       <div className={"Navi"}>
                                            <span>
                                                <Link to='/about' >ABOUT US</Link>
                                            </span>
                                       </div>
                                       <div className={"Navi"}>
                                            <span>
                                                <Link to='/servies'>SERVICES</Link>
                                            </span>
                                       </div>
                                       <div className={"Navi"}>
                                            <span>
                                                <Link to='/references' >REFERENCES</Link>
                                            </span>
                                       </div>
                                       <div className={"Navi"}>
                                            <span>
                                                <Link to='/contacts' >CONTACTS</Link>
                                            </span>
                                       </div>
                               </div>
                               <div className={"search"}>
                                   <SearchOutlined />
                               </div>

                           </Tarbar>
                       </div>
                       <div className={"Banner"}>
                           <img className={"Banner"} src={require("../../assets/img/7.jpg")}></img>
                       </div>
                       <div className={"ContentA"}>
                           <Container></Container>
                       </div>
                       <div className={"ContentB"}>
                           <Container></Container>
                       </div>
                       <div className={"ContentC"}>
                           <Container></Container>
                       </div>
                   </div>
               </MainContain>

        </>
    );
};
