//Authored by iiru
//powerby styled.js
import React from "react";
import {MainContain,SubContainOrg,SubContainCommon,SubMainContain} from "./component/grid";
export function GridLayout (){
    return (
        <>
            <MainContain>
              <div className={"ContentA"}>
                  <div className={"SubContentB"}>
                      <SubContainOrg>
                          <img className={"iconStyle"} src={require("../../assets/img/logo.jpg")} alt={" "}/>
                      </SubContainOrg>
                      <SubContainCommon>
                          <p className={"titleTxt"}>Got a new project?</p>
                          <p className={"mainText"}>
                              <p className={"mainTxt"}>
                                  We work with startups and established companies to plan,
                                  design and build digital products.
                              </p>
                          </p>
                      </SubContainCommon>
                  </div>
                  <div className={"SubContentA"}>
                      <SubMainContain>
                         <p className={"mainTxt"}>
                             <span className={"slogan"}>A </span>
                             <span className={"slogan-strong"}>small team </span>
                             <span className={"slogan"}>of designers and developers,who help brands with </span>
                             <span className={"slogan-strong"}>big ideas</span>
                             <span className={"slogan"}>.</span>
                         </p>
                        </SubMainContain>
                  </div>
                  <div className={"SubContentB"}>
                      <SubContainCommon>
                          <img className={"imgStyle"} src={require("../../assets/img/8.jpg")} alt={""}/>
                      </SubContainCommon>
                      <SubContainCommon>
                          <p className={"titleTxt"}>Code and Resources</p>
                          <p className={"mainText"}>
                              <p className={"mainTxt"}>
                                  We create robust code and useful resources,
                                  and share them with the industry.
                              </p>
                          </p>
                      </SubContainCommon>
                  </div>
              </div>
               <div className={"ContentB"}>
                   <div className={"SubContentA"}>
                       <SubMainContain>
                           <p className={"mainTxt"}>
                               <span className={"slogan-strong"}>5 </span>
                               <span className={"slogan"}>Designers, </span>
                               <span className={"slogan-strong"}>2 </span>
                               <span className={"slogan"}>Developers, and </span>
                               <span className={"slogan-strong"}>1 </span>
                               <span className={"slogan"}>person counting the pennies.</span>
                           </p>
                       </SubMainContain>
                   </div>
                   <div className={"SubContentB"}>
                       <SubContainCommon>
                           <p className={"mainText"}>
                               <span className={"mainTxt"}> We see it as our </span>
                               <span className={"mainTxt-strong"}> responsibility </span>
                               <span className={"mainTxt"}>to keep the web moving forwards. </span>
                           </p>
                       </SubContainCommon>
                       <SubContainCommon>
                           <p className={"mainText"}>
                               <span className={"mainTxt"}> We like to add value-consider us as partners and </span>
                               <span className={"mainTxt-strong"}>involve us early </span>
                               <span className={"mainTxt"}>in thinking. </span>
                           </p>
                       </SubContainCommon>
                   </div>
                   <div className={"SubContentB"}>
                       <SubContainCommon>
                           <p className={"mainText"}>
                               <span className={"mainTxt"}> We move fast-working in short </span>
                               <span className={"mainTxt-strong"}>instinctive </span>
                               <span className={"mainTxt"}>sprints,validating our decision along the way. </span>
                           </p>
                       </SubContainCommon>
                       <SubContainCommon>
                           <img className={"imgStyle"} src={require("../../assets/img/5.jpg")} alt={""}/>
                       </SubContainCommon>
                   </div>
               </div>
            </MainContain>
        </>
    );
};

