import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/storage';
import StoragePath from './utils/firebaseStoragePath';
import AudioPlayer from './audioPlayer';
import TextVisualizer from './textVisualizer';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioURL: '',
      textURL: '',
    };
  }

  componentDidMount() {
    const { match, src } = this.props;
    // Get Translated resources for now
    const { media: mediaPath, text: textPath } = StoragePath.translated;
    const audioFileName = src[match.params.id].translated.audioFilename;
    const textFileName = src[match.params.id].translated.textFilename;

    const audioStorageTranslate = firebase
      .storage()
      .ref()
      .child(mediaPath);

    audioStorageTranslate
      .child(audioFileName)
      .getDownloadURL()
      .then(url => this.setState({ audioURL: url }))
      .catch(err => console.log(err));

    const textStorageTranslate = firebase
      .storage()
      .ref()
      .child(textPath);

    textStorageTranslate
      .child(textFileName)
      .getDownloadURL()
      .then(url => this.setState({ textURL: url }))
      .catch(err => console.log(err));
  }

  render() {
    const { audioURL, textURL } = this.state;
    return (
      <div className="row">
        {audioURL === '' ? (
          <h3>Loading</h3>
        ) : (
          <div className="col-md-6">
            <TextVisualizer src={textURL} />
            <AudioPlayer src={audioURL} />
          </div>
        )}

        <div className="col-md-5">{/* <PoemList /> */}</div>
      </div>
    );
  }
}

// export default Track;

Track.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  src: PropTypes.shape({
    translated: PropTypes.object,
    raw: PropTypes.object,
  }).isRequired,
};

export default Track;
