import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line, CartesianGrid
} from "recharts";

const { Title } = Typography;

const Dashboard = () => {

  const [stats,setStats] = useState({
    users:0,
    doctors:0,
    income:0,
    activities:0
  });

  // 🔹 CREATE DEMO DATA IF EMPTY (VERY IMPORTANT FOR TEACHER TESTING)
  const createDemoData = () => {
    if(!localStorage.getItem("users")){
      localStorage.setItem("users", JSON.stringify([
        {name:"Ali"}, {name:"Sara"}, {name:"Ahmed"}
      ]));
    }

    if(!localStorage.getItem("doctors")){
      localStorage.setItem("doctors", JSON.stringify([
        {name:"Dr Khan"}, {name:"Dr Ali"}
      ]));
    }

    if(!localStorage.getItem("appointments")){
      localStorage.setItem("appointments", JSON.stringify([
        {month:"Jan"}, {month:"Feb"}, {month:"Mar"}, {month:"Apr"}
      ]));
    }

    if(!localStorage.getItem("payments")){
      localStorage.setItem("payments", JSON.stringify([
        {amount:2000},{amount:1500},{amount:3000}
      ]));
    }
  };

  // 🔹 CALCULATE STATS
  useEffect(()=>{
    createDemoData();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const payments = JSON.parse(localStorage.getItem("payments")) || [];

    const totalIncome = payments.reduce((acc,item)=> acc + item.amount ,0);

    setStats({
      users: users.length,
      doctors: doctors.length,
      activities: appointments.length,
      income: totalIncome
    });

  },[]);

  // 🔹 BAR CHART (Appointments per month)
  const barData = [
    { name: "Jan", value: 5 },
    { name: "Feb", value: 7 },
    { name: "Mar", value: 4 },
    { name: "Apr", value: 9 },
    { name: "May", value: 6 },
  ];

  // 🔹 PIE CHART (Users vs Doctors)
  const pieData = [
    { name:"Users", value:stats.users },
    { name:"Doctors", value:stats.doctors }
  ];
  const COLORS = ["#1677ff","#52c41a"];

  // 🔹 LINE CHART (Income)
  const lineData = [
    { name:"Jan", income:1200 },
    { name:"Feb", income:2100 },
    { name:"Mar", income:1800 },
    { name:"Apr", income:2400 },
    { name:"May", income:2600 },
  ];

return (
  <div style={{ width:"100%", minHeight:"100%" }}>
    
    <Title level={2} style={{ marginBottom:20 }}>
      Admin Dashboard
    </Title>

    {/* ===== STATS CARDS ===== */}
    <Row gutter={[16,16]}>
      <Col xs={24} sm={12} md={12} lg={6}>
        <Card style={{background:"#1677ff",color:"white"}}>
          <Title level={4} style={{color:"white"}}>Users</Title>
          <Title style={{color:"white"}}>{stats.users}</Title>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={12} lg={6}>
        <Card style={{background:"#52c41a",color:"white"}}>
          <Title level={4} style={{color:"white"}}>Doctors</Title>
          <Title style={{color:"white"}}>{stats.doctors}</Title>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={12} lg={6}>
        <Card style={{background:"#faad14",color:"white"}}>
          <Title level={4} style={{color:"white"}}>Income</Title>
          <Title style={{color:"white"}}>${stats.income}</Title>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={12} lg={6}>
        <Card style={{background:"#eb2f96",color:"white"}}>
          <Title level={4} style={{color:"white"}}>Activities</Title>
          <Title style={{color:"white"}}>{stats.activities}</Title>
        </Card>
      </Col>
    </Row>

    {/* ===== CHARTS ===== */}
    <Row gutter={[16,16]} style={{marginTop:20}}>

      <Col xs={24} md={24} lg={8}>
        <Card title="Appointments">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="value" fill="#1677ff"/>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} md={24} lg={8}>
        <Card title="Users vs Doctors">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={90} label>
                {pieData.map((entry,index)=>(
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} md={24} lg={8}>
        <Card title="Income Growth">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Line type="monotone" dataKey="income" stroke="#eb2f96"/>
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>

    </Row>

  </div>
);
};

export default Dashboard;