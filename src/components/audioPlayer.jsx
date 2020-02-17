import React from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ src }) => (
  <audio controls>
    <track
      src="captions_en.vtt"
      kind="captions"
      srcLang="en"
      label="english_captions"
    />
    <source src={src} type="audio/mpeg" />
  </audio>
);

AudioPlayer.defaultProps = {
  src: '',
};

AudioPlayer.propTypes = {
  src: PropTypes.string,
};

export default AudioPlayer;
