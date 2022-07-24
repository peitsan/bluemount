//Authored by iiru
//powerby styled.js
import React from "react";
import { MainContain,BlackBoard,Config} from "./count";
import { DatePicker } from 'antd';
import moment from "moment";

export function Counter(){
    const SubBannerCn = (props:any) => {
         var date = new Date(props.date)
         var year = date.getFullYear()
          var month =date.getMonth() + 1
         var day = date.getDate()
         return  <div className={"subBannerCn"}>距离 {year} 年 {month} 月 {day} 日 {props.content}</div>
    }
    const SubBannerEn = (props:any) => {
        var date = new Date(props.date)
        var year = date.getFullYear()
        var month =props.date.substr(3,4)
        var day = date.getDate()
        return <div className={"subBannerEn"}>From {month} {day} {year} {props.content}</div>
    }
    const BannerCnDay = (props:any) => {
        return <div className={"bannerCn"}>{props.content} {parseInt(props.day)} 天</div>
    }
    const BannerCnHMS = (props:any) => {
        return <div className={"bannerEn"}>Countdown {parseInt(props.hour)} Hours {parseInt(props.minute)} Minutes</div>
    }

    const { RangePicker } = DatePicker;
    class Counters extends React.Component<any,{dataValue?: any,D:number,H:number,M:number,end?:string}>{
        constructor(props:any){
            super(props);
            this.state={
                D:0,
                H:0,
                M:0,
                end:"Sat Sep 03 2022 12:59:59 GMT+0800 (中国标准时间)",
                dataValue:[moment(), moment('2022-09-03 02:00:30.975')]
            }

        }
        componentDidMount() {
            setInterval(()=>{
                this.getTime(this.state.dataValue)
            }, 2000)
        }
        dataVal(val:any){
            var startTime = new Date(val[0]._d)
            var endTime = new Date(val[1]._d)
            this.setState({dataValue:[moment(startTime), moment(endTime)]})
        }
        getTime(val?:any){
            console.log("!")
            var now:any =  new Date();
            var endTime = val[1]._d
            var delta = (endTime - now)/1000;
            var D:number = delta / 60 / 60 / 24;
            var H:number = delta / 60 / 60 % 24;
            var M:number = delta / 60 % 60;
            this.setState({D,H,M,end:String(endTime)})
        }

        render(){
            return (
              <>
                  <MainContain >
                      <BlackBoard className={"blackboard"} >
                          <SubBannerCn content={this.props.title} date={this.state.end}></SubBannerCn>
                          <SubBannerEn content={this.props.subtitle} date={this.state.end} ></SubBannerEn>
                          <wbr></wbr>
                          <BannerCnDay content={this.props.count} day={this.state.D}></BannerCnDay>
                          <BannerCnHMS hour={this.state.H} minute={this.state.M}></BannerCnHMS>
                      </BlackBoard>
                  </MainContain>
                  <Config >
                      <span>请选择计时器起止时间：</span>
                      <RangePicker
                          value={this.state.dataValue}
                          onChange={this.dataVal.bind(this)}
                          showTime
                          onOk={this.getTime.bind(this)}
                          format='YYYY/MM/DD HH:mm:ss'
                        />
                  </Config>
              </>
            )
        }

    }
    return (
            <Counters
                title={"开学"}
                subtitle={"Term Begins"}
                count={"倒计时"}
            >
            </Counters>
    );
};
