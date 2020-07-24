import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';

interface OnSubmitFunc {
  (values: unknown): void;
}

interface TestFormProps {
  onSubmit: OnSubmitFunc;
}

const TestForm: FC<TestFormProps> = ({ onSubmit }: TestFormProps) => {
  const [form] = Form.useForm();
  const onFinish = (): void => {
    onSubmit(form.getFieldsValue());
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="username" label="Username">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TestForm;
