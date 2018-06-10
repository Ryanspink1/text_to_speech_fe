import React from 'react';
import { Grid } from 'semantic-ui-react';
import TextToSpeechForm from './TextToSpeechForm';
import ConversionList from './ConversionList';
import Navbar from './Navbar';

export const UserPage = () => (
  <Grid>
    <Navbar/>
    <TextToSpeechForm/>
    <ConversionList/>
  </Grid>
)
