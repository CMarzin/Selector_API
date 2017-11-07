import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGlobalsData } from '../../actions/globalsData';
import globalsSelector from '../../selectors/globalDataFromCMS';

class Announcement extends Component {
  componentWillMount () {
    debugger
    this.props.fetchGlobalsDataFromCMS();
  }

  render () {
    return (
      <div>
        <div className={'trolololo'}>
          <p>coucou</p>
        </div>
      </div>
    );
  }
}

Announcement.fetchData = ({ store }) => {
  return store.dispatch(fetchGlobalsData());
};

const mapStateToProps = ({ globals }) => globalsSelector(globals);

const mapDispatchToProps = (dispatch) => ({
  fetchGlobalsDataFromCMS: () => dispatch(fetchGlobalsData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Announcement);
