import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'firebase/storage';
import 'firebase/database';
import PoemTrack from './poemTrack';

class PoemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { poems } = this.props;
    return (
      <div className="row">
        {poems.map(track => (
          <PoemTrack key={track.id} track={track} />
        ))}
      </div>
    );
  }
}

PoemList.propTypes = {
  poems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      origin: PropTypes.object,
      author: PropTypes.object,
      category: PropTypes.string,
      id: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default PoemList;
