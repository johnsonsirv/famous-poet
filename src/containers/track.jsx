import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import * as dispatchActions from '../actions';
import AudioPlayer from '../components/audioPlayer';
import TextVisualizer from '../components/textVisualizer';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match, getTranslatedPoemMedia, fetchPoem } = this.props;
    getTranslatedPoemMedia(match.params.media);
    fetchPoem(match.params.id);
  }

  render() {
    const {
      poem: { author, origin, title, description },
      translatedMedia: { audioURI, scriptURI },
    } = this.props;

    const isLoadingPoemInfo = author === undefined;
    return (
      <>
        <header className="track-header flex-container">
          <div className="ml-5 track-author">
            <span className="track-title">{title}</span>
            <div className="track-metadata mt-1">
              {isLoadingPoemInfo && <Spinner name="wave" color="#141313" />}
              {author && (
                <span className="mr-3">{`#by - ${author.firstname} ${author.lastname}`}</span>
              )}
              {origin && (
                <span>{`origin - ${origin.tribe}, ${origin.country}`}</span>
              )}
            </div>
          </div>
          <div className="track-audio-player mr-3">
            <AudioPlayer src={audioURI} />
          </div>
        </header>
        <div className="track-details mt-2 flex-container">
          <aside className="description mr-3">
            <header className="mb-2 flex-container">
              <span>
                <svg
                  id="IconsRepoEditor"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 460 460"
                  enableBackground="new 0 0 460 460;"
                  xmlSpace="preserve"
                  width="20px"
                  height="20px"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="0"
                >
                  <g id="IconsRepoEditor">
                    <path d="M230,0C102.975,0,0,102.975,0,230s102.975,230,230,230s230-102.974,230-230S357.025,0,230,0z M268.333,377.36 c0,8.676-7.034,15.71-15.71,15.71h-43.101c-8.676,0-15.71-7.034-15.71-15.71V202.477c0-8.676,7.033-15.71,15.71-15.71h43.101 c8.676,0,15.71,7.033,15.71,15.71V377.36z M230,157c-21.539,0-39-17.461-39-39s17.461-39,39-39s39,17.461,39,39 S251.539,157,230,157z" />
                  </g>
                </svg>
              </span>
              <span className="title ml-2">info</span>
            </header>
            <div>
              {isLoadingPoemInfo && <Spinner name="wave" color="#141313" />}
              <p>{description}</p>
            </div>
            <footer>
              <header className="pb-2">
                <span>avalaible in:</span>
              </header>
              <span className="badge p-2 badge-pill badge-dark">English</span>
            </footer>
          </aside>
          <aside className="translated-text border">
            <header className="mb-2 flex-container">
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="translated and raw poem text"
              >
                <button type="button" className="btn btn-secondary">
                  raw text
                </button>
                <button type="button" className="btn btn-secondary">
                  translated text
                </button>
              </div>
            </header>
            <article className="iframe-body">
              <TextVisualizer src={scriptURI} />
            </article>
          </aside>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => state;

Track.defaultProps = {
  poem: {
    author: { firstname: '', lastname: '' },
    origin: { tribe: '', country: '' },
    title: '',
    description: '',
  },
};

Track.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      media: PropTypes.string,
    }).isRequired,
  }).isRequired,
  translatedMedia: PropTypes.shape({
    audioURI: PropTypes.string,
    scriptURI: PropTypes.string,
  }).isRequired,
  poem: PropTypes.shape({
    author: PropTypes.object,
    origin: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  getTranslatedPoemMedia: PropTypes.func.isRequired,
  fetchPoem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, dispatchActions)(Track);
