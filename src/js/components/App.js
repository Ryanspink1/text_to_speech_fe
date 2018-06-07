import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Grid } from 'semantic-ui-react';
import LoginPage from './LoginPage';
import TextToSpeechForm from './TextToSpeechForm';
import ConversionList from './ConversionList';


const App = () => (
  <Router>
    <Route exact path='/' component={LoginPage}/>

  </Router>
);

export default App;

// <div className=''>
//   <Grid centered={true}>
//     <Grid.Row className='page-header'>
//         <Grid.Column width={9}>
//           <div className='header-text'>
//             <h1>Text To Speech</h1>
//           </div>
//         </Grid.Column>
//         <Grid.Column width={7}>
//           <Header/>
//         </Grid.Column>
//     </Grid.Row>
//     <Grid.Row centered>
//       <Grid.Column width={8}>
//         <TextToSpeechForm/>
//       </Grid.Column>
//     </Grid.Row>
//     <Grid.Row centered>
//       <Grid.Column width={4}>
//         <ConversionList/>
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// </div>
