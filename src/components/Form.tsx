import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import MyInput from './MyInput';

// Initialize a markdown parser
const mdParser = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

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
      <Form.Item name="num" label="Number">
        {/* @ts-ignore */}
        <MyInput />
      </Form.Item>
      <Form.Item
        name="description"
        label="Full Description"
        getValueFromEvent={(data): string => data.text}
      >
        <MdEditor
          style={{ height: '500px' }}
          renderHTML={(text): string => mdParser.render(text)}
        />
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
