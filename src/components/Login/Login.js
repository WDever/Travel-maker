import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Login.scss';

const cx = classNames.bind(styles);

const Login = ({ onChange, idInput, pwInput, onClick }) => {
  return (
    <div className={cx('login')}>
      <div className={cx('login-id')}>
        <input value={idInput} onChange={onChange} placeholder="ID" />
      </div>
      <div className={cx('login-pw')}>
        <input
          value={pwInput}
          onChange={onChange}
          placeholder="PW"
          type="password"
        />
      </div>
      <div className={cx('login-btn')}>로그인</div>
      <div className={cx('register')}>
        <Link exact to="/register">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Login;
