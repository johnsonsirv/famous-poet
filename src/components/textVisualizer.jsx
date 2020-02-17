import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

const TextVisualizer = ({ src }) => {
  const isLoadingText = src === '';
  return (
    <>
      {isLoadingText && <Spinner name="wave" color="#141313" />}
      <iframe title="visual text" src={src} />
    </>
  );
};

TextVisualizer.defaultProps = {
  src: '',
};

TextVisualizer.propTypes = {
  src: PropTypes.string,
};

export default TextVisualizer;
