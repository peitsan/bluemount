//问就是手动化战士
//Authorized by iiru
import styled from "styled-components";
export const MainContain =styled.div`
    background:#1a1a1a;
    border: 1px solid #1b1b1b;
    border-radius :18px ;
    width:1150px;
    height:1150px;
    .ContentA{
        margin:2% 0 0 0;
        width:100%;
        height:49%;
    }
    .ContentB{
        margin: 0 0 2% 0;
        width:100%;
        height:49%;
    }
    .SubContentB{
         margin:0 1% 1% 1%;
         float:left;
         width:23%;
         height:46%;
    }
    .SubContentA{
         margin:0 1% 1% 1%;
         float:left;
         width:46%;
         height:94%;
    }
     
`
//大方块
export const SubMainContain =styled.div`
    background:#2a2a2a;
    border: 1px solid #252525;
    width:100%;
    height:100%;
    margin:0 0 0 1%;
    .pixTxt{
        border:30% 30% 30% 30%;
        color:#FEFEFE;
        font-size:48px;
    }
    .mainTxt{ 
        padding:5% 10% 5% 10%;
        .slogan{
            color:#838383;
            font-size:48px;
            font-weight:344;
        }
         .slogan-strong{
            color:#d95d5d;
            font-size:48px;
            font-weight:344;
        }
    }
    
`
//橘色小方块
export const SubContainOrg =styled.div`
    background:#ff6666;
    border: 1px solid #d95d5d;
    width:100%;
    height:100%;
    margin:0 2% 4% 2%;
    .pixTxt{
        padding:25% 25% 25% 25%;
        color:#FEFEFE;
        font-size:48px;
    }
    .iconStyle{
        margin:10%
    }
    
`
// 灰色小方块
export const SubContainCommon =styled.div`
    background:#2a2a2a;
    border: 1px solid #252525;
    width:100%;
    height:100%;
    margin:0 2% 4% 2%;
    .imgStyle{
       width:100%;
       height:100%;
    }
    .titleTxt{
        padding:8% 10% 0% 10%;
        color:#FEFEFE;
        font-size:20px;
        font-weight:512;
    } 
    .mainText{
         padding:2% 10% 0% 10%;
        .mainTxt{
            color:#838383;
            font-size:20px;
            font-weight:364;
    }
        .mainTxt-strong{
            color:#d95d5d;
            font-size:20px;
            font-weight:364;
    } 
    }
    
`