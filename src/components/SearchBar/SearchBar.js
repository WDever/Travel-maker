import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FaChevronDown } from 'react-icons/fa';
import { ReactComponent as Icon } from './searchIcons.svg';
import logo from './cheers@2x.png';
import styles from './SearchBar.scss';
import Options from '../Options';

const cx = classNames.bind(styles);

const Main = ({
  onChange,
  value,
  onKeyPress,
  userName,
  onToggle,
  toggle,
  isLogin,
}) => {
  if (!isLogin) {
    return (
      <div className={cx('SearchBar-template')}>
        <div className={cx('logo-wrapper')}>
          <img className={cx('logo')} src={logo} alt="fail" />
        </div>
        <div className={cx('search-bar')}>
          <input
            className={cx('search')}
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
          />
          <div className={cx('search-icon')}>
            <Icon className={cx('Icon')} />
          </div>
        </div>
        <div className={cx('user-area')} style={{textDecoration: 'none'}}>
          <Link exact to="/login" style={{textDecoration: 'none'}}>로그인</Link>
        </div>
      </div>
    );
  }

  if (isLogin) {
    return (
      <div className={cx('SearchBar-template')}>
        <div className={cx('logo-wrapper')}>
          <img className={cx('logo')} src={logo} alt="fail" />
        </div>
        <div className={cx('search-bar')}>
          <input
            className={cx('search')}
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
          />
          <div className={cx('search-icon')}>
            <Icon className={cx('Icon')} />
          </div>
        </div>
        <div className={cx('user-area')} onClick={onToggle}>
          {userName} 님 <FaChevronDown />
          {toggle ? <Options /> : null}
        </div>
      </div>
    );
  }
};

export default Main;
