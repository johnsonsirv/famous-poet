import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PoemTrack = props => {
  const {
    track: { title, origin, author, category, translated },
  } = props;

  return (
    <div className="col-sm-3 mt-3">
      <Link to={`/translate/listen/${translated}`}>
        <h4 className="text text-capitalize">{title}</h4>
      </Link>
      <div className="text text-capitalize">
        <strong>origin: </strong>
        {`${origin.tribe}, ${origin.country}`}
      </div>
      <div className="text text-capitalize">
        <strong>poet: </strong>
        {`${author.firstname} ${author.lastname}`}
      </div>
      <div className="text text-capitalize">
        <strong>category: </strong>
        {`${category}`}
      </div>
      <Link to={`/translate/listen/${translated}`} className="btn btn-primary">
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
    origin: PropTypes.object,
    author: PropTypes.object,
    category: PropTypes.string,
    translated: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default PoemTrack;
