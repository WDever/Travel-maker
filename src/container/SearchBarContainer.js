import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchBarActions from '../store/modules/searchBar';
import * as loginActions from '../store/modules/login';
import SearchBar from '../components/SearchBar';

class SearchBarContainer extends React.Component {
  handleToggle = () => {
    const { SearchBarActions } = this.props;

    SearchBarActions.toggle();
  }

  handleChange = e => {
    const { value } = e.target;
    const { SearchBarActions } = this.props;

    console.log(value);

    SearchBarActions.input(value);
  }

  render() {
    const { input, toggle, isLogin } = this.props;
    const { handleChange, handleToggle } = this;
    return (
      <SearchBar onChange={handleChange} value={input} userName="최민규" onToggle={handleToggle} toggle={toggle} isLogin={isLogin} />
    )
  }
}

const mapStateToProps = ({ searchBar, login }) => ({
  toggle: searchBar.toggle,
  input: searchBar.input,
  isLogin: login.isLogin,
});

const mapDispatchProps = dispatch => ({
  SearchBarActions: bindActionCreators(searchBarActions, dispatch),
  LoginActions: bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(SearchBarContainer);
