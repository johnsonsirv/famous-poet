import poemOneAudioURI from '../media/SampleAudio.mp3';
import poemOneTextURI from '../media/SampleText.txt';
import poemTwoAudioURI from '../media/SampleAudio2.mp3';
import poemTwoTextURI from '../media/SampleText2.txt';

const TrackList = [
  {
    1: {
      trackId: 1,
      title: 'Poem Tittle 1',
      origin: 'Poem origin',
      description: 'Poem 1 description',
      poet: 'Poems 1 poet',
      date: 'Poem 1 date',
      audioURI: poemOneAudioURI,
      textURI: poemOneTextURI,
    },
  },
  {
    2: {
      trackId: 2,
      title: 'Poem Tittle 2',
      origin: 'Poem origin 2',
      description: 'Poem 2 description',
      poet: 'Poems 2 poet',
      date: 'Poem 2 date',
      audioURI: poemTwoAudioURI,
      textURI: poemTwoTextURI,
    },
  },
];

export default TrackList;
