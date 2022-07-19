//Authored by iiru
//powerby styled.js
import React from "react";
import { Link} from "react-router-dom";
import { MainContain,Tarbar,Container} from "./component/img";
import { SearchOutlined,KeyOutlined,SyncOutlined,EditOutlined } from "@ant-design/icons";
export function ImgLayout(){
    let routerkey = 1;
  return (
        <>
               <MainContain>
                   <div className={"Margin"}>
                           <Tarbar className={"Tarbar"}>
                                 <div className={"logoContainer"}>
                                    <img src={require("../../assets/img/logo2.png")} className={"logo"} alt={""}></img>
                                     {/*<img src={require("../../assets/img/diker.jpg")} className={"logo"} alt={""}></img>*/}
                                 </div>
                                 <div className={"Navigate"}>
                                      <div className={"Navi"}>
                                                <Link style={{color:(routerkey == 1) ? '#c1e5e5' : '#b5b7b8'}} to='/home'>HOME</Link>
                                       </div>
                                       <div className={"Navi"}>
                                                <Link style={{color:(routerkey == 2) ? '#c1e5e5' : '#b5b7b8'}} to='/about' >ABOUT US</Link>
                                       </div>
                                       <div className={"Navi"}>
                                                <Link style={{color:(routerkey == 3) ? '#c1e5e5' : '#b5b7b8'}}  to='/servies'>SERVICES</Link>
                                       </div>
                                       <div className={"Navi"}>
                                                <Link style={{color:(routerkey == 4) ?'#c1e5e5' : '#b5b7b8'}}  to='/references' >REFERENCES</Link>
                                       </div>
                                       <div className={"Navi"}>
                                                <Link style={{color:(routerkey == 5) ? '#c1e5e5' : '#b5b7b8'}}  to='/contacts' >CONTACTS</Link>
                                       </div>
                                  </div>
                               <div className={"search"}>
                                   <SearchOutlined className={"search-icon"}/>
                               </div>
                           </Tarbar>
                       <div className={"Banner"}>
                           <img className={"Banner"} src={require("../../assets/img/banner.png")}></img>
                       </div>
                       <div className={"Content"}>
                           <div className={"ContentA"}>
                               <Container>
                                   <div className={"ContentIcon"}>
                                       <KeyOutlined style={{color:"#c1e5e5",fontSize:"128px"}}/>
                                   </div>
                                   <div className={"ContentTitle"}>
                                       ALL-IN-ONE NEW CONSTRUCTION
                                   </div>
                                   <div className={"ContentMain"}>
                                       In business as in combat, trust is the great enabler in making the most of scarce resources. Many companies, for instance, have succeeded in increasing or speeding production while going from Just-in-Case to Just-in-Time levels of inventory. Just-in-Case is a function of a lack of trust; Just-in-Time is a function of trust. Just-in-Case says "I don't trust my guys to do what they say they are going to do"; Just-in-Time says, "I know I can count on my suppliers."

                                   </div>
                               </Container>
                           </div>
                           <div className={"ContentB"}>
                               <Container>
                                   <div className={"ContentIcon"}>
                                       <SyncOutlined style={{color:"#c1e5e5",fontSize:"128px"}}/>
                                   </div>
                                   <div className={"ContentTitle"}>
                                       RENOVATION + MODERNIZATION
                                   </div>
                                   <div className={"ContentMain"}>
                                       As it happens, the number of men and women who work for Boeing, either directly as employees or indirectly as part of supplier companies engaged in carrying out work for Boeing, is considerably larger than the force under General Franks' command. All told, we are probably about 500,000-strong - a Desert Storm-sized force. As big as we are, to move fast and to execute with a high degree of precision, we, too, must have total confidence in the promises that we make to each other. That's the first prerequisite.
                                   </div>
                               </Container>
                           </div>
                           <div className={"ContentC"}>
                               <Container>
                                   <div className={"ContentIcon"}>
                                       <EditOutlined style={{color:"#c1e5e5",fontSize:"128px"}}/>
                                   </div>
                                   <div className={"ContentTitle"}>
                                       ARCHITECTURAL SERVICES
                                   </div>
                                   <div className={"ContentMain"}>
                                       I also believe it is both possible and necessary - in the competitive arena that we occupy - to combine a hard-nosed sense of attending to the practicalities of survival . . . with a genuine concern for the health and well-being of partners and co-workers. In an increasingly interdependent world, selfishness is not a viable option; to be too selfish is, ironically, to dig your own grave.
                                   </div>
                               </Container>
                           </div>
                         </div>
                       </div>
               </MainContain>

        </>
    );
};
