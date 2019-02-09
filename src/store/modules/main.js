import { produce } from 'immer';
import { handleActions, createAction } from 'redux-actions';
import first from '../../components/LocationPicItem/pic/1.png';
import second from '../../components/LocationPicItem/pic/2.png';
import third from '../../components/LocationPicItem/pic/3.png';
import forth from '../../components/LocationPicItem/pic/4.png';
import fifth from '../../components/LocationPicItem/pic/5.png';
import sixth from '../../components/LocationPicItem/pic/6.png';
import seventh from '../../components/LocationPicItem/pic/7.png';
import eighth from '../../components/LocationPicItem/pic/8.png';
import ninth from '../../components/LocationPicItem/pic/9.png';
import tenth from '../../components/LocationPicItem/pic/10.png';
import eleven from '../../components/LocationPicItem/pic/11.png';
import twelve from '../../components/LocationPicItem/pic/12.png';


const INCREMENT = 'main/INCREMENT';
const DECREMENT = 'main/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  idx: 0,
  locationList: [
    {
      key: 0,
      title: '서울',
      country: 'Korea',
      picSrc: first,
    },
    {
      key: 1,
      title: '부산',
      country: 'Korea',
      picSrc: second,
    },
    {
      key: 2,
      title: '광주',
      country: 'Korea',
      picSrc: third,
    },
    {
      key: 3,
      title: '대전',
      country: 'Korea',
      picSrc: forth,
    },
    {
      key: 4,
      title: '울산',
      country: 'Korea',
      picSrc: fifth,
    },
    {
      key: 5,
      title: '인천',
      country: 'Korea',
      picSrc: sixth,
    },
    {
      key: 6,
      title: '전라도',
      country: 'Korea',
      picSrc: seventh,
    },
    {
      key: 7,
      title: '충청도',
      country: 'Korea',
      picSrc: eighth,
    },
    {
      key: 8,
      title: '경기도',
      country: 'Korea',
      picSrc: ninth,
    },
    {
      key: 9,
      title: '경상도',
      country: 'Korea',
      picSrc: tenth,
    },
    {
      key: 10,
      title: '강원도',
      country: 'Korea',
      picSrc: eleven,
    },
    {
      key: 11,
      title: '제주도',
      country: 'Korea',
      picSrc: twelve,
    },
  ],
};

export default handleActions(
  {
    [INCREMENT]: (state, action) =>
      produce(state, draft => {
        if (draft.idx !== 11) {
          draft.idx += 1;
        }
      }),
    [DECREMENT]: (state, action) =>
      produce(state, draft => {
        if (draft.idx !== 0) {
          draft.idx -= 1;
        }
      }),
  },
  initialState,
);
