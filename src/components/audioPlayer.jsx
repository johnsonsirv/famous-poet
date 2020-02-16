/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState({ bar: 0, duration: '' });
  const [currentPlayTime, setCurrentPlayTime] = useState(0);
  const [pausedStatus, setPauseStatus] = useState({ bar: 0, duration: '' });
  const audioRef = useRef();
  const playAudio = async () => {
    try {
      audioRef.current.currentTime = currentPlayTime;
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.log('error playing audio. try again', error);
    }
  };
  const handlePlay = () => playAudio();
  const handlePlayEnded = () => {
    audioRef.current.currentTime = 0;
    setCurrentPlayTime(0);
    setPlaying(false);
  };

  const playTimeToString = time => {
    let playTime = '';
    if (!isNaN(time)) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      playTime = `${min}:${sec}`;
    }
    return playTime;
  };

  const handlePause = () => {
    const { currentTime } = audioRef.current;
    const pausedProgress = progress;
    setCurrentPlayTime(currentTime);
    setPauseStatus(pausedProgress);
    setPlaying(false);
  };

  const getPlayProgress = useCallback(() => {
    let progressObj = {};
    try {
      const refCurrentTime = audioRef.current.currentTime;
      const refDuration = audioRef.current.duration;
      const playPercent = (refCurrentTime / refDuration) * 100;
      const currTime = playTimeToString(refCurrentTime);
      const durationTime = playTimeToString(refDuration);
      const bar = isNaN(playPercent) ? 0 : playPercent;
      const duration = `${currTime} / ${durationTime}`;
      progressObj = { bar, duration };
    } catch (error) {
      console.log('Swtiched views while audio is playing');
    }

    return progressObj;
  }, [audioRef]);

  useEffect(() => {
    audioRef.current.src = src;
    if (playing) {
      try {
        audioRef.current.currentTime = currentPlayTime;
        audioRef.current.play();
      } catch (error) {
        console.log('error playing audio', error);
      }
    } else if (!playing) {
      audioRef.current.pause();
    }

    // clean up
    return () => {};
  }, [src, audioRef, playing, currentPlayTime]);

  useEffect(() => {
    const handle = audioRef.current;
    handle.addEventListener('timeupdate', () => {
      const progressObj = getPlayProgress();
      setProgress(progressObj);
    });

    // cleanup: remove event listener
    return () => {
      handle.removeEventListener('timeupdate', () => {});
    };
  }, [setProgress, audioRef, getPlayProgress]);

  return (
    <>
      <div className="audio flex-container">
        <div className="play-indicator flex-container">
          {playing ? (
            <>
              <div className="progressBar">
                <div className="status" style={{ width: `${progress.bar}%` }} />
              </div>
              <span className="timeElapsed">{progress.duration}</span>
            </>
          ) : (
            <>
              <div className="progressBar">
                <div
                  className="status"
                  style={{ width: `${pausedStatus.bar}%` }}
                />
              </div>
              <span className="timeElapsed">{pausedStatus.duration}</span>
            </>
          )}
        </div>
        <div className="play-controls flex-container">
          {playing && (
            <button
              className="button pause"
              onClick={handlePause}
              type="button"
              title="pause"
            />
          )}
          {!playing && (
            <button
              className="button play"
              onClick={handlePlay}
              type="button"
              title="play"
            />
          )}
        </div>
      </div>
      <audio ref={audioRef} onEnded={handlePlayEnded}>
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </audio>
    </>
  );
};

AudioPlayer.defaultProps = {
  src: '',
};

AudioPlayer.propTypes = {
  src: PropTypes.string,
};

export default AudioPlayer;
