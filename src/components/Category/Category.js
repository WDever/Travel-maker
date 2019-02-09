import React from 'react';
import classNames from 'classnames/bind';
import mountain from './icons/mountains@3x.png';
import beachBall from './icons/beach-ball@3x.png';
import seaWave from './icons/sea-waves@3x.png';
import island from './icons/island@3x.png';
import Hot from './icons/h-o-t@3x.png';
import City from './icons/building-1@3x.png';
import Landmark from './icons/eiffel-tower@3x.png';
import Fork from './icons/fork@3x.png';
import styles from './Category.scss';

const cx = classNames.bind(styles);

const Category = () => {
  return (
    <div className={cx('category-template')}>
      여행을 통해 즐거운 추억을 만들어보세요.
      <div className={cx('category-wrapper')}>
        <div className={cx('item-wrapper')}>
          <div className={cx('cat-item')}>
            <img src={mountain} alt="fail" />
          </div>
          산
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('cat-item')}>
            <img src={beachBall} alt="fail" />
          </div>
          바다
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('cat-item')}>
            <img src={seaWave} alt="fail" />
          </div>
          계곡
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('cat-item')}>
            <img src={island} alt="fail" />
          </div>
          섬
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('hot item')}>
            <img src={Hot} alt="fail" />
          </div>
          핫플ACE
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('city item')}>
            <img src={City} alt="fail" />
          </div>
          시티투어
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('landmark item')}>
            <img src={Landmark} alt="fail" />
          </div>
          랜드마크
        </div>
        <div className={cx('item-wrapper')}>
          <div className={cx('fork item')}>
            <img src={Fork} alt="fail" />
          </div>
          맛집
        </div>
      </div>
    </div>
  );
};

export default Category;
