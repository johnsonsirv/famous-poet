import React from 'react';
import PropTypes from 'prop-types';

const TextVisualizer = ({ src }) => (
  <iframe width="150" height="150" title="visual text" src={src} />
);

TextVisualizer.defaultProps = {
  src: '',
};

TextVisualizer.propTypes = {
  src: PropTypes.string,
};

export default TextVisualizer;
