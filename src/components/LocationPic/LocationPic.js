import React from 'react';
import classNames from 'classnames/bind';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import styles from './LocationPic.scss';

const cx = classNames.bind(styles);

const LocationPic = ({ locationTitle, contry, picSrc }) => {
  return (
    <div className={cx('location-pic-template')} style={{backgroundImage: `url(${picSrc})`}}>
      <div className={cx('pic-changer')}>
        <MdNavigateBefore size={100} />
      </div>
      <div className={cx('location-title')}>
        {locationTitle}
        <div className={cx('contry')}>
          {contry}
        </div>
      </div>
      <div className={cx('pic-changer')}>
        <MdNavigateNext size={100} />
      </div>
    </div>
  );
};

export default LocationPic;
