import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export const PoweredByWatson = () => (
  <Grid.Row centered id='watson-power-row'>
    <Grid.Column width={ 4 } textAlign={ 'center'} >
      <div>
        <Image id='watson-power-image' src={"https://s3-us-west-2.amazonaws.com/rs-text-to-speech/assets/watsonSpinSlow.gif"} size='tiny' verticalAlign='middle'/>
        <span id='watson-power-text'> <a href='https://www.ibm.com/watson/services/speech-to-text/'>Powered by IBM Watson</a></span>
      </div>
    </Grid.Column>
  </Grid.Row>
)
