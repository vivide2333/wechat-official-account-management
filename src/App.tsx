
import './App.css';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';

const prefix = 'elt-wechat-official-account-management';

const areas = [
  { label: '默认全局回复', value: 'Beijing' },
  { label: '被关注回复', value: 'Shanghai' },
  { label: '关键字回复', value: 'Shanghai1' },
];

const replyType = [
  {label: '', value: 1}
  {label: '', value: 2}
  {label: '', value: 3}
];
function App() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
  return (
    <div className={`${prefix}-wrap`}>
        <Form form={form} name="dynamic_form_complex" onFinish={onFinish} autoComplete="off">
          <Form.Item name="area" label="回复触发类型" rules={[{ required: true, message: 'Missing area' }]}>
            <Select options={areas} onChange={handleChange} />
          </Form.Item>
          <Form.Item name="type" label="关注类型" rules={[{ required: true, message: 'Missing area' }]}>
            <Select options={replyType} />
          </Form.Item>
        </Form>
    </div>

  );
}

export default App;
