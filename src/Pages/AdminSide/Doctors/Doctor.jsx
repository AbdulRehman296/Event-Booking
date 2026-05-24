// import { Button, Card, Modal, Table } from 'antd'
// import React, { useState } from 'react'


// const Doctors = () => {
//   const [isModelOpen,setisModelOpen]= useState(false)

//   // console.log(isModelOpen,"afjs")
//   const dataSource = [
//   {
//     key: '1',
//     name: 'Dr Ali Khan',
//     specialization: 'Cardiologist',
//     experience: '5 Years',
//     fee: 2000,
//   },
//   {
//     key: '2',
//     name: 'Dr Sara Ahmed',
//     specialization: 'Dermatologist',
//     experience: '3 Years',
//     fee: 1500,
//   },
//   {
//     key: '3',
//     name: 'Dr Usman Tariq',
//     specialization: 'Neurologist',
//     experience: '7 Years',
//     fee: 2500,
//   },
// ];

// const columns = [
//   {
//     title: "Doctor Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Specialization",
//     dataIndex: "specialization",
//   },
//   {
//     title: "Experience",
//     dataIndex: "experience",
//   },
//   {
//     title: "Fee",
//     dataIndex: "fee",
//   },
// ];
//   return (
// <>
//     <Card title="Doctor List" extra={<Button onClick={()=>setisModelOpen(true)}>+ Add Doctor</Button>}>
//       <Table dataSource={dataSource} columns={columns} />;

//     </Card>

//     <Modal title={"Add Doctor"} open={isModelOpen} onOk={()=>setisModelOpen(false)} onCancel={()=>setisModelOpen(false)}>
//       ilkxklzhzl
//     </Modal>
    
    
//     </>
//   )
// }

// export default Doctors




import { Button, Card, Modal, Table, Form, Input, InputNumber, Row, Col } from "antd";
import React, { useState } from "react";
import {DeleteOutlined} from '@ant-design/icons'


const Doctors = () => {
  const [isModelOpen, setisModelOpen] = useState(false);
  let data = JSON.parse(localStorage.getItem("doctorList"))
  const [doctorList, setDoctorList] = useState(data || []);

  const [form] = Form.useForm()

  



  const columns = [
    { title: "id", dataIndex: "id" },
    { title: "Doctor Name", dataIndex: "name" },
    { title: "Specialization", dataIndex: "specialization" },
    { title: "Experience", dataIndex: "experience" },
    { title: "Fee", dataIndex: "fee" },
    {title:"Action", key:"action",
       render: (_,object) => <DeleteOutlined onClick={()=> handledeletedoctor(object?.id)}/>
    }
  ];


  const handleCreateDoctor=(values)=>{
    let newDoctors = [...doctorList,{...values, id :doctorList.length+1}]
    setDoctorList(newDoctors)
    // DoctorList.push(values)
    localStorage.setItem("doctorList",JSON.stringify(newDoctors))
    form.resetFields()
    setisModelOpen(false)
    
  }


  const handledeletedoctor = (id)=>{
    console.log(id,"iddddddddddd")

      const result = doctorList.filter((item)=>item?.id != id)

      setDoctorList(result)
       localStorage.setItem("doctorList",JSON.stringify(result))
    
  }

  return (
    <>
      <Card
        title="Doctor List"
        extra={<Button type="primary" onClick={() => setisModelOpen(true)}>+ Add Doctor</Button>}
      >
        <Table dataSource={doctorList} columns={columns} />
      </Card>

      <Modal
        title="Add Doctor"
        open={isModelOpen}
        onCancel={() => setisModelOpen(false)}
        footer={false}
      >
        <Form layout="vertical"  onFinish={handleCreateDoctor} form={form}>
          
          <Row gutter={10}>

            <Col span={12}>
              <Form.Item
                label="Doctor Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Specialization"
                name="specialization"
                rules={[{ required: true, message: "Enter specialization" }]}
              >
                <Input placeholder="Cardiologist" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Experience (Years)"
                name="experience"
                rules={[{ required: true, message: "Enter experience" }]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="10" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Fee (PKR)"
                name="fee"
                rules={[{ required: true, message: "Enter fee" }]}
              >
                <InputNumber style={{ width: "100%" }} placeholder="2000" />
              </Form.Item>
            </Col>

          </Row>

          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>

        </Form>
      </Modal> 
    </>
  );
};

export default Doctors;




