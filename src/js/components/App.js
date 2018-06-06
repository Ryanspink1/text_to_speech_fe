import React from "react";
import { Grid} from 'semantic-ui-react';
import Header from "./Header";
// import Body from "./Body"
import TextToSpeechForm from "./TextToSpeechForm";
import ConversionList from "./ConversionList";


const App = () => (
  <div className="">
    <Grid centered={true}>
      <Grid.Row className="page-header">
          <Grid.Column width={9}>
            <div className="header-text">
              <h1>Text To Speech</h1>
            </div>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header/>
          </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <TextToSpeechForm/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={8}>
          <ConversionList/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
