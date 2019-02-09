import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searchBarActions from '../store/modules/searchBar';
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
    const { input, toggle } = this.props;
    const { handleChange, handleToggle } = this;
    return (
      <SearchBar onChange={handleChange} value={input} userName="최민규" onToggle={handleToggle} toggle={toggle} />
    )
  }
}

const mapStateToProps = ({ searchBar }) => ({
  toggle: searchBar.toggle,
  input: searchBar.input,
});

const mapDispatchProps = dispatch => ({
  SearchBarActions: bindActionCreators(searchBarActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(SearchBarContainer);
