import React from 'react';
import { Page, Block, BlockTitle, Button } from 'framework7-react';
import f7logo from '../static/icons/Ekhephini-Logo.png';
import ReactAudioPlayer from 'react-audio-player';

export default class extends React.Component {

  constructor () {
    super();
    this.state = { showButton: false };
    this.onInstallBtnClicked = this.onInstallBtnClicked.bind(this);
  }

  componentDidMount() {
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.setState({ showButton: true });
    });
  }

  onInstallBtnClicked() {
    this.setState({ showButton: false });
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      this.defferedPrompt = null;
    });
  }

   render () {
    return (
    <Page name="home">
      <div align="center">
      <BlockTitle>Ekhephini FM | Livestream</BlockTitle>
      <Block strong>
        <img src={f7logo} height="168" width="256" alt="" />
        <br />
        <ReactAudioPlayer
          src="http://209.97.189.28:8000/listen.html?sid=1"
          autoPlay
          controls
        />
        <br />
         <Button style={{ color: "#fff", background: "#00811F" }} onClick={this.onInstallBtnClicked}>Install this App</Button>
      </Block>
      </div>
    </Page>     
    );
   }
}