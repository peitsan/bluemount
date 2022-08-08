//问就是手敲样式
//Authorized by iiru
import styled from "styled-components";
export const CardWrapper = styled.div`
    width: 388px;
    height: 388px;
    background: #ffffff;
    border-radius:12px 12px 12px 12px;
    box-shadow:-2px 1px 8px 2px grey;
 `
export const CardTop = styled.div<{
border: boolean, borderColorDeep: string, borderColorLight: string
}>`
  align="center"
  width: 100px;
  height: 200px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-image: linear-gradient(${(props) => props.borderColorDeep},${(props) => props.borderColorLight});
  border-bottom: 1px solid ${(props) => props.border ?"#F0F0F0": "transparent"};
  border-radius: 12px 12px 0 0 ;
  
 .main{
  margin:8px 2px -30% -24px;
  height:200px;
  width:192px;
  float:left;
 }
 .imgStyle{
  color:"#F2F2F2";
  margin:0px 0% -30% 2%;
  height:216px;
  width:216px;
  }
  .subMain{
     height:200px;
     width:120px;
     margin:92px -15% -30% 10%;
     float:left;
  }
  .mainTitle {
    color:#fdfdfd;
    font-size: 28px;
    font-weight: 408;
  }
  .subTitle {
      margin:0px 20px 1% 12%;
      // color-image:linear-gradient(#6facfd,#4493fd);
      color:#6facfd;
      font-size: 16px;
      font-weight: 496;
  }
  .shortLine{
  border:0px;
  border-bottom:0.1px;
  padding:0.4px 144px 0 25px;
  height:5px;
  width:125px;
  }
`

export const CardMessage = styled.div`
padding:'10px'
border-radius: 0 0 12px 12px;
.message {
    margin: 10px 15% 0 15%;
    color:#d2cac6;
    font-size: 18px;
    font-weight: 240;
  }
};
`







