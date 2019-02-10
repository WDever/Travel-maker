import React from 'react';
import classNames from 'classnames/bind';
import styles from './Register.scss';

const cx = classNames.bind(styles);

const Register = ({ onChange, value }) => {
  return (
    <div className={cx('Register')}>
      <input onChange={onChange} value={value} placeholder="ID" />
      <input onChange={onChange} value={value} placeholder="PASSWORD" />
      <input onChange={onChange} value={value} placeholder="ID" />
      <div className={cx('ok-btn')}>가입하기</div>
    </div>
  );
};

export default Register;
