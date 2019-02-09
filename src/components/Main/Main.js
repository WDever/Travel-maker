import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import SearchBar from '../SearchBar';
import LocationPic from '../LocationPic';
import styles from './Main.scss';

const cx = classNames.bind(styles);

const Main = () => {
  const test = `https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2765&q=80`;

  return (
    <div className={cx('main-page')}>
      <SearchBar userName="최민규" />
      <LocationPic locationTitle="제주특별자치도" contry="Korea" picSrc={test} />
      
    </div>
  );
};

export default Main;
