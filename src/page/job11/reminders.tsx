//Authored by iiru
//powerby styled.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { InputRef,FormInstance} from 'antd';
import moment from "moment";
import { MainContain,MainContent} from "./remind";
import { Button, Form, Input, Popconfirm, Table,Modal} from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable'
import axios from "axios"



interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
// interface loginParams {
//        username:string |null
//         password:string |null
// }
interface addParams {
    date:InputRef|null
    content:InputRef|null
}
const loginParam = {
        username:'wudaxun',
        password:'b504bb94f881beb88c15c156b9123dbb98444ca055aa83f9c497153c6d195f0f'
    }
 const AddReminder:addParams = {
    content:null,
    date:null,
 }
const addParam:any = {content:'xxxx',date:new Date()}

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
            console.log(res.data)
                return res.data
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
const FindReminderData = ()=>{
    Promise.resolve(
       axios.post('/api/findReminder',addParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//改
const UpdateReminderData = ()=>{
    Promise.resolve(
       axios.post('/api/updateReminder',addParam)
    ).then((res)=>{
        if(res.status === 200) {
            console.log(res.data)
                return res.data
        }
    })
}
//标序
const dateFormater= (e:any) => {
	return e ? moment(e).format('MMMM Do YYYY, h:mm a') : ''
}



const EditableContext = React.createContext<FormInstance<any> | null>(null);


interface Item {
  id:string;
  date: string;
  content: string;
}
interface EditableRowProps {
  index: number;
}

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
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

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
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
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
  const handleDelete = (key:string) => {
      DelReminderData({"_id":key})
        
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
    title: '序号',
            align: "center",
            width: 60,
            dataIndex: 'num',
            key: 'num',
          render: (text, record, index) => `${(pageOption.pageNo - 1) * 8 + (index + 1)}`,
            //${} 中可以放入JS表达式；``是模板字符串，可以在里面加变量
  },
  {
    title: '日期',
    align: "center",
    dataIndex:'date',
    width: 100,
    render:(text) =>{
        return <span>{moment.locale() && moment(text).format('MMMM Do YYYY,a h:mm')} </span>
    },

  },
  {
    align: "center",
    title: '笔记',
     width: 300,
    dataIndex: 'content',
  },
    {
      title: '操作',
      dataIndex: '_id',
      width: 50,
      render:(text: any) =>
        Data.length >= 1 ? (
          <Popconfirm title="确认删除?" onConfirm={() => handleDelete(text)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null
    },
  ];
    const dialogActive = ()=>{
         setVisible(true);
    }

  const handleSave = (row: DataType) => {
    const newData = [...Data];
    // @ts-ignore
      const index = newData.findIndex(item => row.key === item.length);
    const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });
      AddReminderData(item)
  };
  const components = {
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
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
 const [pageOption, setPageOption] = useState({
    pageNo: 1,  //当前页为1
    pageSize: 8, //一页8行
  })
const paginationChange = async (current:any, size:any) => {
    //前面用到useState
    setPageOption({
      pageNo: current, //当前所在页面
      pageSize: size,  //一页有几行
    })
  }
const paginationProps = {
    current: pageOption.pageNo,
    pageSize: pageOption.pageSize,
    onChange: (current:any, size:any) =>
    paginationChange(current, size)
  }
const [ Data, setData ] = useState([]);
const [ AddMsg, setAddMsg ] = useState({});
const [visible, setVisible] = useState(false);
const [disabled, setDisabled] = useState(false);
const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
const draggleRef = useRef<HTMLDivElement>(null);


//确认添加关闭对话框/后/请求新增备忘录
  const handleOk = () => {
   let tmp:any = {
     content:AddReminder.content?.input?.value,
     date:new Date()
   }
    Promise.resolve(()=>{
      setAddMsg(tmp)
    }).then(()=>{
      console.log(AddMsg)
      AddReminderData(tmp)
    })
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
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

const loadData =(e:any)=>{setData(e)}
useEffect(()=>{GetReminderData()},[]);
    return (
          <>
             <MainContain>
                 <MainContent>
                      <div>
                      <Button  type="primary" onClick={()=>{dialogActive()}} style={{ marginBottom: 16 }}>
                        新增笔记
                      </Button>
                      <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        bordered
                        dataSource={Data}
                        pagination={paginationProps}
                        columns={columns as ColumnTypes}
                      />
                    </div>
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
