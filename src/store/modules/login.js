
import { produce } from 'immer';
import { handleActions, createAction } from 'redux-actions';

const IS_LOGIN = 'login/IS_LOGIN';
const RESET = 'login/RESET';
const REGISTER_INPUT = 'login/REGISTER_INPUT';
const LOGIN_INPUT = 'login/LOGIN_INPUT';

export const isLogin = createAction(IS_LOGIN, bool => bool);
export const reset = createAction(RESET);
export const registerInput = createAction(REGISTER_INPUT, (text, name) => ({ text, name }));
export const loginInput = createAction(LOGIN_INPUT, (text, name) => ({ text, name }));

const initialState = {
  isLogin: false,
  register: {
    id: '',
    password: '',
    name: '',
    phone: '',
    email: '',
  },
  userInfo: {
    name: '',
    accessToken: '',
    refreshToken: '',
  },
};

export default handleActions(
  {
    [IS_LOGIN]: (state, action) =>
      produce(state, draft => {
        draft.isLogin = action.payload
      }),
    [RESET]: (state, action) =>
      produce(state, draft => {
        draft.register.id = '';
        draft.register.password = '';
        draft.register.name = '';
        draft.register.phone = '';
        draft.register.email = '';
        draft.register.id = '';
      }),
    [REGISTER_INPUT]: (state, action) =>
      produce(state, draft => {
        draft.register = action.payload;
      })
  },
  initialState
);
