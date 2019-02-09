import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mainActions from '../store/modules/main';
import LocationPic from '../components/LocationPic';

class LocationPicContainer extends React.Component {
  componentDidMount() {
    const { idx, locationList } = this.props;
    console.log(idx, locationList);
  }
  
  goNext = () => {
    const { MainActions } = this.props;

    MainActions.increment();
  };

  goPrev = () => {
    const { MainActions } = this.props;

    MainActions.decrement();
  }

  render() {
    const { idx, locationList } = this.props;
    const { goNext, goPrev } = this;
    return (
      <LocationPic goNext={goNext} goPrev={goPrev} locationList={locationList} idx={idx} />
    );
  }
}

const mapStateToProps = ({ main }) => ({
  idx: main.idx,
  locationList: main.locationList,
});

const mapDispatchToProps = dispatch => ({
  MainActions: bindActionCreators(mainActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationPicContainer);
