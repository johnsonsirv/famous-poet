import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import PoemTrack from './poemTrack';
import TrackList from './trackList';

class PoemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioURI: '',
      textURI: '',
    };
  }

  componentDidMount() {
    const schema = {
      translate: {
        media: '/translate/media',
        text: '/translate/text',
      },
      raw: {
        media: '/raw/media',
        text: '/raw/text',
      },
    };

    // const { media, text } = schema.translate;

    // const audioStorageTranslate = firebase
    //   .storage()
    //   .ref()
    //   .child(media);

    // audioStorageTranslate
    //   .child('selena-gomez-lose-you-to-love-me.mp3')
    //   .getDownloadURL()
    //   .then(url => this.setState({ audioURI: url }))
    //   .catch(err => console.log(err));

    // const textStorageTranslate = firebase
    //   .storage()
    //   .ref()
    //   .child(text);

    // textStorageTranslate
    //   .child('selena-gomez-lose-you-to-love-me.txt')
    //   .getDownloadURL()
    //   .then(url => this.setState({ textURI: url }))
    //   .catch(err => console.log(err));

    // const poemDatabase = firebase.database().ref('famous-poet');
    // poemDatabase.once('value').then(snap => {
    //   console.log('snap', snap.val());
    // });
  }

  // http call to realtime DB
  render() {
    const { audioURI, textURI } = this.state;
    return (
      <div className="row">
        {TrackList.map((track, index) => (
          <PoemTrack
            key={track[index + 1].trackId}
            track={track[index + 1]}
          />
        ))}
      </div>
    );
  }
}

export default PoemList;
