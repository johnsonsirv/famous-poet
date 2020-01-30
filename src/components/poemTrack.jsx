import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PoemTrack = props => {
  const {
    track: { trackId, title, origin, poet },
  } = props;

  return (
    <div className="col-md-3 mt-2">
      <div>{title}</div>
      <div>{origin}</div>
      <div>{poet}</div>
      <Link to={`/translate/listen/${trackId}`} className="btn btn-primary">
        Listen
      </Link>
    </div>
  );
};

PoemTrack.propTypes = {
  track: PropTypes.shape({
    audioURI: PropTypes.string,
    textURI: PropTypes.string,
    title: PropTypes.string,
    origin: PropTypes.string,
    poet: PropTypes.string,
    trackId: PropTypes.number,
  }).isRequired,
};

export default PoemTrack;
