import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdSettings, MdSearch, MdAccountCircle} from 'react-icons/md';
import classNames from 'classnames/bind';
import styles from './NavBar.scss';

const cx = classNames.bind(styles);

const NavBar = () => {
  return (
    <div className={cx('nav-bar-wrapper')}>
      <div className={cx('nav-bar-items')}>
        <NavLink exact to="/" activeClassName={cx('nav-bar-active')} style={{color: '#C97483', textDecoration: 'none'}} className={cx('nav-bar-link')}>
          <MdHome size={25} /><p>홈</p>
        </NavLink>
      </div>
      <div className={cx('nav-bar-items')}>
        <NavLink exact to="/" activeClassName={cx('nav-bar-active')} style={{color: '#C97483', textDecoration: 'none'}} className={cx('nav-bar-link')}>
          <MdSettings size={25} /><p>찜</p>
        </NavLink>
      </div>
      <div className={cx('nav-bar-items')}>
        <NavLink exact to="/" activeClassName={cx('nav-bar-active')} style={{color: '#C97483', textDecoration: 'none'}} className={cx('nav-bar-link')}>
          <MdAccountCircle size={25} /><p>마이페이지</p>
        </NavLink>
      </div>
      <div className={cx('nav-bar-items')}>
        <NavLink exact to="/" activeClassName={cx('nav-bar-active')} style={{color: '#C97483', textDecoration: 'none'}} className={cx('nav-bar-link')}>
          <MdSearch size={25} /><p>검색</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
