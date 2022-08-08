//问就是手动化战士
//Authorized by iiru
import React from "react";
import  "./imgSurround.css";

export const ImgSurround = () => {

    const Gallery:any =() =>  {
        const surround = () => {
            var oImg = document.getElementsByTagName("img");
            var len=oImg.length;
            console.log(len)
            let deg=360/len;

            const oWrap=document.getElementById("imgMatrix");
            // var oWrap=document.querySelector('.wrap');

            //页面加载完毕在执行的代码
            window.onload=function(){
                Array.prototype.forEach.call(oImg,function(ele,index,self){
                    // 旋转并沿Z轴平移
                    ele.style.transform="rotateY("+deg*index+"deg) translateZ(350px)";
                    //过渡时间1s
                    ele.style.transition="1s "+(len-index)*0.1+"s";
                });
            }
            //翻动3D相册
            let newX,newY,minusX,minusY,rotX=-20,rotY=0;
            document.onmousedown=function(e) {
                // 点击设置初值
                let lastX = e.clientX;
                let lastY = e.clientY;

                this.onmousemove = function (e) {
                    newX = e.clientX;
                    newY = e.clientY;
                    minusX = newX - lastX;
                    minusY = newY - lastY;
                    rotX -= minusY * 0.2;
                    rotY += minusX * 0.1;
                    // @ts-ignore
                    oWrap.style.transform = "rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
                    lastX = newX;
                    lastY = newY;

                }
                this.onmouseup = function (e) {
                    //鼠标松开
                    this.onmousemove = null;//清除鼠标移动
                }
            }
        }
            return (
                <div className={"perspective"}>
                    <div className={"wrap"} id="imgMatrix" onMouseOver={surround}>
                        <img className={"wrapimg"} src={require("../../assets/img/1.jpg")} alt={""}  />
                        <img className={"wrapimg"} src={require("../../assets/img/2.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/3.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/4.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/5.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/6.jpg")} alt={""}/>
                        <img className={"wrapimg"} src={require("../../assets/img/7.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/8.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/9.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/10.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/11.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/12.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/13.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/14.jpg")} alt={""} />
                        <img className={"wrapimg"} src={require("../../assets/img/15.jpg")} alt={""} />
                        <p className={"wrapp"}></p>
                    </div>
                </div>
            );
    };

    return (
        <div className={"wrapper"}>
            <Gallery>
            </Gallery>
        </div>
        );
};
