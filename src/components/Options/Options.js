import React from 'react'
import classNames from 'classnames/bind';
import styles from './Options.scss';

const cx = classNames.bind(styles);

const Options = () => {
  return (
    <div className={cx('options')}>
      <div className={cx('my-page-btn')}>
        마이 페이지
      </div>
      <div className={cx('configs')}>
        이용약관
      </div>
      <div className={cx('configs')}>
        개인정보처리방침
      </div>
      <div className={cx('configs')}>
        서비스 소개
      </div>
      <div className={cx('logout')}>
        로그아웃
      </div>
    </div>
  )
}

export default Options
