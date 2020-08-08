import React from 'react';
import { Page, Block, BlockTitle, Button } from 'framework7-react';
import f7logo from '../static/icons/Ekhephini-Logo.png';
import ReactAudioPlayer from 'react-audio-player';

export default class extends React.Component {

  constructor () {
    super();
  }

  componentDidMount() {

  }
   render () {
    return (
    <Page name="home">
      <BlockTitle>Ekhephini FM | Livestream</BlockTitle>
      <Block strong>
        <img src={f7logo} height="168" width="256" alt="" />
        <br />
        <ReactAudioPlayer
          src="http://209.97.189.28:8000/listen.html?sid=1"
          autoPlay
          controls
        />
      </Block>
    </Page>     
    );
   }
}