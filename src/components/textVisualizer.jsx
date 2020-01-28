import React from 'react';
import PropTypes from 'prop-types';
import Text from '../media/selena-gomez-lose-you-to-love-me.txt';

const TextVisualizer = ({ src }) => (
  <iframe width="150" height="150" title="visual text" src={src} />
);


TextVisualizer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default TextVisualizer;
