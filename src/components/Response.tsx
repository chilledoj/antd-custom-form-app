import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

interface BackFunction {
  (): void;
}

interface ResponseProps {
  values: unknown;
  back: BackFunction;
}

const Response: FC<ResponseProps> = ({ values, back }: ResponseProps) => {
  return (
    <Result
      status="success"
      title="Form data successfully received"
      extra={[
        <Button
          onClick={(e): void => {
            e.preventDefault();
            back();
          }}
          icon={<LeftCircleOutlined />}
          type="link"
        >
          Back
        </Button>,
      ]}
    >
      <pre>
        <code>{JSON.stringify(values, null, 2)}</code>
      </pre>
    </Result>
  );
};

export default Response;
