import React from 'react';
import { Grid } from 'semantic-ui-react';

export const Greeting = () => (
  <div>
  <Grid.Row centered>
    <Grid.Column>
      <div className="greeting-logo">
        <img src="https://s3-us-west-2.amazonaws.com/rs-text-to-speech/106fb4640b295eeaf938754c630c2891.png" alt="greeting" height="25%" width="25%"/>
      </div>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row centered>
    <Grid.Column>
      <div id="greeting-text">
        <p>
          <strong>Welcome to Text to Speech:</strong> an app for converting text phrases to spoken output.
          <br/>
          <br/>
          Please login or sign up to continue.
        </p>
      </div>
    </Grid.Column>
  </Grid.Row>
  </div>
)
