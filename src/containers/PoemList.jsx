import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import PoemTrack from '../components/poemTrack';
import * as dispatchActions from '../actions';

class PoemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchPoems } = this.props;
    fetchPoems();
  }

  render() {
    const { poems } = this.props;
    const isEmpty = poems.length === 0;
    return (
      <div className="flex-container main-poemlist-container">
        <div className="mt-1 flex-container poemlist-row">
          {isEmpty && (
            <Spinner
              className="mr-auto ml-auto"
              name="three-bounce"
              color="#000"
              fadeIn="none"
            />
          )}
          {poems.map(track => (
            <PoemTrack key={track.id} track={track} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ poems }) => ({ poems });

PoemList.propTypes = {
  poems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      origin: PropTypes.object,
      author: PropTypes.object,
      category: PropTypes.string,
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
  fetchPoems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, dispatchActions)(PoemList);
