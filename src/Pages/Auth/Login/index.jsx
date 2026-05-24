import { Button, Card, Col, Flex, Form, Input, Row } from "antd";
import React from "react";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();


    const userData = JSON.parse(localStorage.getItem("sign-up-data"));
    const adminData = JSON.parse(localStorage.getItem("adminData"));
       
      const handleLogin = (values) => {
        if(adminData?.email === values.email&&
           adminData?.password === values.password  )
           {
             localStorage.setItem("adminToken","aslihaglgih")
            alert("Admin login successfully")

          window.location.pathname="/"

           }
        // console.log(values, "values");
    
      else if (
        values.email === userData?.email &&
        values.password === userData?.password
      ) {
        alert("User login successful!");
          localStorage.setItem("userToken","jkhgkahka")
          window.location.pathname="/"
  
      } else {
        alert("Invalid email or password");
      }
  
  };

  return (
    <Flex justify="center" align="center">
        <div><img src="sign&login2.webp" alt="" height={400}/> </div>
        
        <div>
            <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Card title="Login" style={{ width: "80%" }}>
        <Form onFinish={handleLogin} layout="vertical">
            {/* <h1 style={{marginBottom:"25px",color:"#2F87CC"}}>Login</h1> */}
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: "Please enter your email!" }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please enter your password!" }]}
              >
                <Input.Password />
              </Form.Item>
            </Col>

            <Col span={24}>
              <div style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit" style={{ width: "25%",backgroundColor:"#8ED5FD",fontWeight:"bolder" }}>
                  Submit
                </Button>
              </div>

              <div style={{ textAlign: "center", marginTop: "10px",display:"flex",justifyContent:"center" }}>
                Dont have an account? <a href="/signup"><div style={{color:"#4183C3"}}>Go to SignUp</div></a>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Flex>
        </div>
    </Flex>
  );
};

export default Login;