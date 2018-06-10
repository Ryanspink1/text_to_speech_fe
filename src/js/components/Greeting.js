import React from 'react';
import { Grid } from 'semantic-ui-react';

export const Greeting = () => (
    <Grid.Row centered>
      <Grid.Column>
        <div className="greeting-logo">
          <img src="https://s3-us-west-2.amazonaws.com/rs-text-to-speech/106fb4640b295eeaf938754c630c2891.png" alt="greeting" height="25%" width="25%"/>
        </div>
        <div id="greeting-text">
          <p>
            <strong>Welcome to Text to Speech:</strong> an app that converts text phrases to spoken audio.
          </p>
        </div>
      </Grid.Column>
    </Grid.Row>
)
