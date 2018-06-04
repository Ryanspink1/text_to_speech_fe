import React from "react";
import { Grid} from 'semantic-ui-react';
import Header from "./Header";
import TextToSpeechForm from "./TextToSpeechForm";


const App = () => (
  <div className="">
    <Grid centered={true}>
      <Grid.Row className="header">
          <Grid.Column width={9}>
            <div className="header-text">
              <h1>Text To Speech</h1>
            </div>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header/>
          </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TextToSpeechForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
