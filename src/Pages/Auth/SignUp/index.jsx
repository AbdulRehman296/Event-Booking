import { Button, Card, Col, Flex, Form, Input, Row } from "antd";
import React from "react";

const SignUp = () => {
  const handleSignUp = (values) => {
    console.log(values, "values");
    localStorage.setItem("sign-up-data", JSON.stringify(values));
    localStorage.setItem("userToken", "kajhkaf");
    window.location.pathname = "/";
  };
  return (
    <Flex align="center" justify="center" style={{height:"100vh"}}>
      <div>
        <img src="sign&login2.webp" alt="" height={400} />
      </div>

      <div>
        <Flex
          justify="right"
          align="center"
          style={{ height: "100vh", paddingRight: "100px" }}
        >
          <Card title="Sign Up" style={{ width: "80%" }}>
            <Form onFinish={handleSignUp} layout="vertical">
              {/* <h1 style={{ marginBottom: "25px", color: "#2F87CC" }}>
                Sign Up
              </h1> */}
              <Row gutter={20}>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Full Name"
                    name="full_name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full_name !",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Email Adress"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Confirm-Password"
                    name="confirm-Password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your confirm Password!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        width: "25%",
                        backgroundColor: "#8ED5FD",
                        fontWeight: "bolder",
                      }}
                      type="primary"
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    Already have an account?
                    <a href="/LOgin">
                      <div style={{ color: "#4183C3" }}>Go to Login</div>
                    </a>
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

export default SignUp;
