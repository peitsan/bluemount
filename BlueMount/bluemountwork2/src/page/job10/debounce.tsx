//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,MainContent} from "./bounce";
import { Input } from 'antd';


export function Debounce(){
    
    return (
          <>
             <MainContain>
                 <MainContent
                 >
                     <Input.Password placeholder="input password"/>
                     <Input.Password placeholder="input password"/>
                 </MainContent>
             </MainContain>
          </>
    )
};
