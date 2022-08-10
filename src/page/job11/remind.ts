//Authored by iiru
//powerby styled.js
import styled from "styled-components";
export const MainContain =styled.div`
   width:100%;
   height:1000px;
   background-image: linear-gradient(to right, #f49ecb,#d94bcc);
  
  .mainContent{
   margin:5% 25% 0 25%;
   width:500px;
   height:16%;
   background:#391a33;
  }
`
export const MainContent =styled.div`
     margin:4% 10%;
     width:80%;
     font-size:32px;
     color:#efefef;
`
export const Tarbar =styled.div`
     height:100%;
     display:flex;
     width:80%;
     font-size:32px;
     color:#efefef;
     .AddButton{
          margin:10% 5% 5% 5%;  
     }
     .SearchInput{
          margin:10% 0% 5%  5%; 
          marginBottom: 16; 
          width: '10%' 
     }
     .SearchPicker{
          margin:10% 0% 5% 0%;  
          marginBottom: 16; 
          width:'40%' 
     }
`
export const FormStyle = styled.div`
     .editable-cell {
     position: relative;
   }
   
   .editable-cell-value-wrap {
     padding: 5px 12px;
     cursor: pointer;
   }
   
   .editable-row:hover .editable-cell-value-wrap {
     padding: 4px 11px;
     border: 1px solid #d9d9d9;
     border-radius: 2px;
   }
   
   [data-theme='dark'] .editable-row:hover .editable-cell-value-wrap {
     border: 1px solid #434343;
   }
`