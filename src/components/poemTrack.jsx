import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from './audioPlayer';
import TextVisualizer from './textVisualizer';

const PoemTrack = props => {
  const { audioURI, textURI } = props;

  // if (audioURI === '') return <p>Loading please wait...</p>;
  return (
    (audioURI === '')
      ? <p>Loading...</p>
      : (<div> <TextVisualizer src={textURI} /> <AudioPlayer src={audioURI} /></div>)
  );
};

PoemTrack.propTypes = {
  audioURI: PropTypes.string.isRequired,
  textURI: PropTypes.string.isRequired,
};

export default PoemTrack;
