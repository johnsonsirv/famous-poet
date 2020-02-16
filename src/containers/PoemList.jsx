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
      <div className="container">
        <div className="row">
          {isEmpty && (
            <div className="col-md-6 ml-auto mr-auto">
              <h3 className="text text-secondary text-bold">loading poems</h3>
              <Spinner
                className="mr-auto"
                name="three-bounce"
                color="#000"
                fadeIn="none"
              />
            </div>
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
    }).isRequired
  ).isRequired,
  fetchPoems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, dispatchActions)(PoemList);
