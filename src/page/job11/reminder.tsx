//Authored by iiru
//powerby styled.js
import React, { useContext, useEffect, useRef, useState } from 'react';

import type { RangePickerProps } from 'antd/es/date-picker';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import type { InputRef,FormInstance} from 'antd';
import moment from "moment";
import "moment/locale/zh-cn"
import { FormStyle, MainContain,MainContent,Tarbar} from "./remind";
import { Button, Form, Input, Popconfirm, Table, Modal, DatePicker} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable'
import axios from "axios"



const { RangePicker } = DatePicker;


interface AddParams {
    date:InputRef|null
    content:InputRef|null
}
interface Item {
  key: string;
  _id: string;
  date: string;
  content: string;
  operation: any;
}
interface EditableRowProps {
  index: number;
}
interface UpdateParams {
  _id:string,
  content:string
}
const loginParam = {
        username:'wudaxun',
        password:'b504bb94f881beb88c15c156b9123dbb98444ca055aa83f9c497153c6d195f0f'
    }
const AddReminder:AddParams = {
    content:null,
    date:null,
 }
const SearchParams:{content:InputRef|null}={content:null}  

export function Reminder(){

const Login = ()=>{
     Promise.resolve(
        axios.post('/api/login',loginParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//取
const GetReminderData = ()=>{

  Promise.resolve(
       axios.get('/api/getAllReminder')
    ).then((res)=>{
        if(res.status === 200 ||res.status ===304) {
            loadData(res.data)
            return false;
        }
    })
}
//一组CURD
//增
const AddReminderData = (e:any)=>{
  console.log(e);
      Promise.resolve(
       axios.post('/api/addReminder',e)
    ).then((res)=>{
      console.log(res)
        if(res.status === 200) {
          GetReminderData();
                return false;
        }
    })
}
//删
const DelReminderData = (e:any)=>{
    Promise.resolve(
       axios.post('/api/deleteReminder',e)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
            GetReminderData()
                return res.data
        }
    })
}
//查
const FindReminderData = (e:any)=>{
  console.log(e)
    Promise.resolve(
       axios.post('/api/findReminder',e)
    ).then((res)=>{
        if(res.status === 200) {
          console.log(res.data)
          loadData(res.data)
                return false
        }
    })
}
const FindReminderRange = (e:any)=>{
  console.log(e)
  Promise.resolve(
     axios.post('/api/findReminderRange',e)
  ).then((res)=>{
      if(res.status === 200) {
        console.log(res.data)
        loadData(res.data.result)
              return false
      }
  })
}
//改
const UpdateReminderData = (e:any)=>{
  console.log(e)
    Promise.resolve(
       axios.post('/api/updateReminder',e)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
            GetReminderData()
                return false
        }
    })
}
//标序
const EditableContext = React.createContext<FormInstance<any> | null>(null);
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleMouseOut:(record: Item)=> {};
  handleSave: (record: Item) => {};
}
const handleMouseOut = (e:any)=>{
  return ({editable:false})
}
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleMouseOut,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const RefInput = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;
  useEffect(()=>{GetReminderData()
    return ()=>{
      if (editing) {
              RefInput.current!.focus();
      }}
  },[editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('保存失败:', errInfo);
    }
  };

  let childNode = children;
  if (editable) {
    childNode = "确认修改?" ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title}不能为空.`,
          },
        ]}
      >
        <Input ref={RefInput} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;
 
//初始数据
  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
    title: '序号',
            align: "center",
            width: 60,
            dataIndex: 'num',
            key: 'sortNum',
          render: (text, record, index) => `${(pageOption.pageNo - 1) * 8 + (index + 1)}`,
            //${} 中可以放入JS表达式；``是模板字符串，可以在里面加变量
  },
  {
    title: '日期',
    align: "center",
    dataIndex:'date',
    width: 100,
    key: 'startDate',
    render:(text) =>{
        return <span>{moment.locale() && moment(text).format('MMMM Do YYYY,a h:mm')} </span>
    },

  },
  {
    align: "center",
    title: '笔记',
     width: 300,
    dataIndex: 'content',
    key: 'reminderContain',
    editable: true,
  },
    {
      title: '操作',
      dataIndex: '_id',
      width: 50,
      key: 'operation',
      render:(text: any) =>
        Data.length >= 1 ? (
          <Popconfirm title="确认删除?" onConfirm={() => handleDelete(text)}>
            <a>Delete</a>
          </Popconfirm>
      
        ) : null
    },
  ];
  const handleMouseOver=()=>{
     
  }
//打开对话框
  const dialogActive = ()=>{
         setVisible(true);
    }
  const comp = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: UpdateParams) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  const handleDelete = (key:string) => {
    DelReminderData({"_id":key})
};
  const handleSave = (params:UpdateParams) => {
    UpdateReminderData(params)
};
  //确认添加关闭对话框/后/请求新增备忘录/按钮时间家你听
  const handleOk = () => {
    let tmp:any = {
      content:AddReminder.content?.input?.value,
      date:new Date()
    }
     Promise.resolve(()=>{
       setAddMsg(tmp)
     }).then(()=>{
       // console.log(AddMsg)
       AddReminderData(tmp)
     })
     setVisible(false);
   };
   const handleCancel = () => {
     setVisible(false);
   };
 
const [pageOption, setPageOption] = useState({
    pageNo: 1,  //当前页为1
    pageSize: 8, //一页8行
  })
 //分页参数设定 
const paginationChange = async (current:any, size:any) => {
    //前面用到useState
    setPageOption({
      pageNo: current, //当前所在页面
      pageSize: size,  //一页有几行
    })
  }

//分页参数计算
const paginationProps = {
    current: pageOption.pageNo,
    pageSize: pageOption.pageSize,
    onChange: (current:any, size:any) =>
    paginationChange(current, size)
  }
  //日期选择框输入监听
  const onChangeDateRange = (
    value: RangePickerProps['value'],
  ) => {
    let FindParmas = {
      value:value,
    }
    FindReminderRange(FindParmas)
  };
 //输入框回车监听
  const onKeyDownchange= (e:any)=>{
    if(e.keyCode === 13){
      if(SearchParams.content != null)
        FindReminderData({content:SearchParams.content?.input?.value as string})
    }
  }
//数据表
const [ Data, setData ] = useState([]);
const [ AddMsg, setAddMsg ] = useState({});
const [visible, setVisible] = useState(false);
const [disabled, setDisabled] = useState(false);
const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
const draggleRef = useRef<HTMLDivElement>(null);



//新增对话框拖动时间监听
   const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
//加载数据
const loadData =(e:any)=>{setData(e)}
//初始化渲染数据
// useEffect(()=>{GetReminderData()
//   return ()=>{
//     if (editing) {
//             RefInput.current!.focus();
//     }}
// },[editing]);
    return (
          <>
             <MainContain>
                 <MainContent>
                     <Tarbar>
                        <Button  type="primary" onClick={()=>{dialogActive()}} className = {"AddButton"} >
                            新增笔记
                          </Button>
                          <RangePicker
                          className={"SearchPicker"}
                          onChange={onChangeDateRange}
                          format='YYYY/MM/DD HH:mm:ss'
                        />
                          <Input addonBefore={<SearchOutlined/>}  onKeyDown={(e)=>onKeyDownchange(e)} ref={input =>SearchParams.content = input} className = {"SearchInput"} />
                      </Tarbar>   
                     <FormStyle>
                            <Table
                              components={comp}
                              rowClassName={() => 'editable-row'}
                              bordered
                              dataSource={Data}
                              pagination={paginationProps}
                              columns={columns as ColumnTypes}
                            
                            />
                    </FormStyle>
       {/* 增加备忘录 */}
       <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
              onFocus={() => {}}
            onBlur={() => {}}
          >
            添加笔记
          </div>
        }
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={modal => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
            <Input  ref={input => AddReminder.content = input} placeholder={'请输入笔记内容'}></Input>
            </Modal>
                 </MainContent>
             </MainContain>
          </>
    )
}
