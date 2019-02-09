import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FaChevronDown } from 'react-icons/fa';
import { ReactComponent as Icon } from './searchIcons.svg'
import logo from './cheers@2x.png';
import styles from './SearchBar.scss';

const cx = classNames.bind(styles);

const Main = ({ onChange, value, onKeyPress, userName }) => {
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
      <div className={cx('user-area')}>
        <div>
          {userName} 님 <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Main;
