import { combineReducers } from "redux";
import main from './main';
import searchBar from './searchBar';
import login from './login';

export default combineReducers({
  main,
  searchBar,
  login,
});
