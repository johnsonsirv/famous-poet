import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from './audioPlayer';
import TextVisualizer from './textVisualizer';
import TrackList from './trackList';
// call to Storage
const callToStorage = id => TrackList[id - 1][id];

const Track = ({ match }) => {
  const audioSrc = callToStorage(match.params.id).audioURI;
  const textSrc = callToStorage(match.params.id).textURI;
  return (
    <div className="card">
      <TextVisualizer src={textSrc} />
      <AudioPlayer src={audioSrc} />
    </div>
  );
};

Track.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Track;
