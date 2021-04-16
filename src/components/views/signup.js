import React from 'react';
import {
  Form,
  Input,
  Button,
 

} from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span:  8 },
};
const tailLayout={
wrapperCol:{md:{offset: 8,span:8}}
}

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <Form
    {...layout}
      form={form}
      name="register"
      onFinish={onFinish}
    >
    
        <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
  
    </Form>
  );
};
export default RegisterForm;