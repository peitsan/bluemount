//Authored by iiru
//powerby styled.js
import styled from "styled-components";
export const MainContain =styled.div`
    background:#c1e5e5;
    border: 1px solid #c1e5e4;
    border-radius :12px ;
    width:1440px;
    height:1600px;
    .Margin{
         margin:56px;
         background:#ffffff;
         border: 1p x solid #c1e5e4;
        .Tarbar{
        background:#efefef;
        width:100%;
        height:128px;
        display:flex;   
        float：left;
        }
        .Banner{
            margin: 0 0 2% 0;
            width:100%;
            height:49%;
            .imgBan{
               height:100px;
            }
        }
        .Content{
            height:50%;
            width:100%;
            display:flex;
             .ContentA{
                 margin:0 1% 1% 1%;
                 float:left;
                 width:33%;
                 height:92%;
            }
            .ContentB{
                 margin:0 1% 1% 1%;
                 float:left;
                 width:33%;
                 height:92%;
            }
            .ContentC{
                 margin:0 1% 1% 1%;
                 float:left;
                 width:33%;
                 height:92%;
            }   
        }
       
    }
`
export const Tarbar = styled.div`
    background:#efedef;
     .logoContainer{
              margin:0;   
              display:flex; 
              padding:4% 0 0 12%;  
              height:100%;
              width:25%;
              .logo{
                 width:120%;
             }
          }
      .search{  
              display:flex; 
              float:left;
              width:5%;
              height：100%;
              padding:5% 0 0 0%;  
               .search-icon{
                font-size:32px;
               }
                }
     .Navigate{
              display:flex; 
              float:right;
              width:66%;
              height：100%;
              padding:5% 0 0 12%;  
        .Navi{
             display:inline;
             width:24%;
             text-align:"center";
             font-size:22px;
             font-weight:624;
            
        }
    }
`
export const Container = styled.div`
   .ContentIcon{
      margin:20% 33% 5% 33%;
      height:20%;
   }
   .ContentTitle{
      margin:8% 15% 10% 15%;
      height:10%;
      text-align:center;
      font-size:18px; 
      font-weight:624;    
   }
    .ContentMain{
         margin:8% 15% 10% 15%;
          height:10%;
          font-size:14px; 
          font-weight:524;   
    }
`
