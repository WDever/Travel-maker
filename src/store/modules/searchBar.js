import { produce } from 'immer';
import { handleActions, createAction } from 'redux-actions';

const TOGGLE = 'searchBar/TOGGLE';
const INPUT = 'searchBar/INPUT';

export const toggle = createAction(TOGGLE);
export const input = createAction(INPUT, text => text);

const initialState = {
  toggle: false,
  input: '',
};

export default handleActions(
  {
    [TOGGLE]: (state, action) =>
      produce(state, draft => {
        draft.toggle = !state.toggle
      }),
    [INPUT]: (state, action) =>
      produce(state, draft => {
        draft.input = action.payload
      }),
  },
  initialState
);
