import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PoemTrack from './poemTrack';
import * as dispatchActions from './actions';

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
    return (
      <div className="row">
        {poems.map(track => (
          <PoemTrack key={track.id} track={track} />
        ))}
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
