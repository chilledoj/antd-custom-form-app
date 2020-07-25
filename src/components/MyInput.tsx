import React, { FC, useState } from 'react';
import { useInterval } from 'ahooks';

const styles = {
  wrapper: {
    display: 'block',
    width: '100%',
  },
  input: {
    fontFamily: 'monospace',
    display: 'block',
    width: '100%',
  },
};

type OnChangeHandler = (num: number) => void;

interface MyInputProps {
  value: number;
  onChange: OnChangeHandler;
}

const MyInput: FC<MyInputProps> = ({ value, onChange }: MyInputProps) => {
  const [val, setVal] = useState(value || 0);
  useInterval(() => {
    setVal(Number(val || 0) + 1);
    onChange(Number(val || 0) + 1);
  }, 2500);

  const mdlChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setVal(Number(e.target.value));
    onChange(Number(e.target.value));
  };
  return (
    <div style={styles.wrapper}>
      <input type="number" value={value} onChange={mdlChange} style={styles.input} />
    </div>
  );
};
export default MyInput;
