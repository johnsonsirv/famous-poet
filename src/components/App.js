import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import PoemTrack from './poemTrack';

class App extends Component {
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

    const { media, text } = schema.translate;

    const audioStorageTranslate = firebase
      .storage()
      .ref()
      .child(media);

    audioStorageTranslate
      .child('selena-gomez-lose-you-to-love-me.mp3')
      .getDownloadURL()
      .then(url => this.setState({ audioURI: url }))
      .catch(err => console.log(err));

    const textStorageTranslate = firebase
      .storage()
      .ref()
      .child(text);

    textStorageTranslate
      .child('selena-gomez-lose-you-to-love-me.txt')
      .getDownloadURL()
      .then(url => this.setState({ textURI: url }))
      .catch(err => console.log(err));
  }

  render() {
    const { audioURI, textURI } = this.state;
    return (
      <div className="app">
        <PoemTrack audioURI={audioURI} textURI={textURI} />
      </div>
    );
  }
}

export default App;
