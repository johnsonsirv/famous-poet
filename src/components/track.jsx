import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as dispatchActions from './actions';
import AudioPlayer from './audioPlayer';
import TextVisualizer from './textVisualizer';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match, getTranslatedPoem } = this.props;
    getTranslatedPoem(match.params.id);
  }

  render() {
    const {
      translated: { audioURI, scriptURI },
    } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <TextVisualizer src={scriptURI} />
          <AudioPlayer src={audioURI} />
        </div>
        <div className="col-md-5">{/* <PoemList /> */}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ translated }) => ({ translated });

Track.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  translated: PropTypes.shape({
    audioURI: PropTypes.string,
    scriptURI: PropTypes.string,
  }).isRequired,
  getTranslatedPoem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, dispatchActions)(Track);
