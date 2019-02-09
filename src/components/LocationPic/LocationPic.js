import React from 'react';
import classNames from 'classnames/bind';
import styles from './LocationPic.scss';
import LocationPicItem from '../LocationPicItem';

const cx = classNames.bind(styles);

const LocationPic = ({ locationList, goNext, goPrev }) => {
  const picList = locationList.map((item, idx) => {
    return (
      <LocationPicItem
        key={idx}
        locationItem={item}
        goNext={goNext}
        goPrev={goPrev}
      />
    );
  });
  return <div className={cx('List')}>{picList}</div>;
};

export default LocationPic;
