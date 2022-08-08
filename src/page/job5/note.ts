//Authored by iiru
//powerby styled.js

import styled from "styled-components";
export const MainContain =styled.div`
   width:600px;
   height:780px;
   background:#efefef;
  .tarbar{
   height:25%;
   border-radius:24px 24px 0 0 ;
   background:#ffc0cb;
  }
  .content{
   height:70%;
   border-radius:0 0 24px 24px;
   background:#efefef;
  }
`
export  const Tarbar =styled.div`
  .title{
    padding:10% 35% 0 35%;
    text-align:center;
    font-size:28px;
    font-weight:584;  
    color:#fff
  }
  .inputbox{
    padding:2% 12% 0 12%;
    width:100%
    float:left;
    .input{
      width:80%;
      height:54px;
      border-radius:12px 0 0 12px
    }
    .submit{
      width:20%;
      height:54px;
      border-radius:0 12px 12px 0;
      border:none;
      background:#e77689;
      font-size:20px;
      color:#8e5d60;
    }
  }
 `
export  const Notice =styled.div`
    height:10%;
    width:100%;
    .noteover{
        background:#e4c2c2;
        color:#fff;
        height:100%;
        width:100%;
         display:flex;
        
        .check{
          width:10%;
          font-size:24px;
          position: relative;
          top: 25%
         
        }
        .notice{
          font-size:18px;
          text-decoration:line-through;
          width:70%;
          position: relative;
          top: 25%
        }
        .delete{
          font-size:24px;
          width:20%;
          position: relative;
          top: 25%
          
        }
    }      
     }
     .notefirst{
        background:#eeeeee;
        height:100%;
        width:100%;
        display:flex;
        
        .check{
          width:10%;
          font-size:24px;
          position: relative;
          top: 25%
         
        }
        .notice{
          font-size:18px;
          width:70%;
          position: relative;
          top: 25%
        }
        .delete{
          font-size:24px;
          width:20%;
          position: relative;
          top: 25%
          
        }
    }  
     .notethen{
        background:#f9f9f9;
        height:100%;
        width:100%;
         display:flex;
        
        .check{
          width:10%;
          font-size:24px;
          position: relative;
          top: 25%
         
        }
        .notice{
          font-size:18px;
          width:70%;
          position: relative;
          top: 25%
        }
        .delete{
          font-size:24px;
          width:20%;
          position: relative;
          top: 25%
          
        }
    }  
    }      
 `
