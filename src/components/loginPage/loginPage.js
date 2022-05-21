import React,{ useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Col, Row, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login, getMe } from 'apis/WebAPI';
import { setAuthToken } from "utils/utils";
import { UseAppContext } from 'contexts/contexts';

const { Content } = Layout;
const LoginPage = () => {
const [errorMessage, setErrorMessage] = useState();
const { apiValue:{ user, setUser } } = UseAppContext();

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    login(values.username, values.password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);
      getMe().then((response) => {
        if (data.ok !== 1) {
          setAuthToken(null);
          setErrorMessage(response.toString());
        }
        setUser(response.data);
        navigate("/");
      });
    });
  }

  return (
    <Content className="formTop">
     <Row className="formTop">
        <Col span={20} >
          <Form
            name="basic"
            layout='vertical'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"/>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </Content>
  );
};

export default LoginPage;
