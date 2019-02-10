import React from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './App.scss';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';

const cx = classNames.bind(styles);

class App extends React.Component {
  test = `https://images.unsplash.com/photo-1549571558-7ca00bbd1b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80`;

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <div className={cx('App')}>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
