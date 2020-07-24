import React, { FC } from 'react';

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

interface OnChangeHandler {
  (e): void;
}

interface MyInputProps {
  value: number;
  onChange: OnChangeHandler;
}

const MyInput: FC<MyInputProps> = ({ value, onChange }: MyInputProps) => {
  return (
    <div className="weirdinput" style={styles.wrapper}>
      <input type="number" value={value} onChange={onChange} style={styles.input} />
    </div>
  );
};
export default MyInput;
