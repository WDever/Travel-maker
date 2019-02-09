import React from 'react';
import classNames from 'classnames/bind';
import styles from './LocationPicItem.scss';
import test from './pic/1.png';

const cx = classNames.bind(styles);

const LocationPicItem = ({ locationItem }) => {
  return (
    <div className={cx('location-pic-wrapper')}>
      <div
        className={cx('location-pic-template')}
        style={{ backgroundImage: `url(${locationItem.picSrc})` }}
      >
        <div className={cx('location-title')}>
          {locationItem.title}
          <div className={cx('contry')}>{locationItem.country}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationPicItem;
