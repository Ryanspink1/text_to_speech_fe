import React from "react";
import Header from "./Header";
import { Grid} from 'semantic-ui-react';


const App = () => (
  <div className="">
    <Grid centered={1} celled='internally'>
      <Grid.Row>
        <Grid.Column width={2}>
          <Header />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
