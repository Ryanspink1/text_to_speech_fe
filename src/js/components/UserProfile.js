import React from 'react';
import { Grid } from 'semantic-ui-react';
import TextToSpeechForm from './TextToSpeechForm';
import ConversionList from './ConversionList';
import Navbar from './Navbar';
import UserProfileEmail from './UserProfileEmail'

export const UserProfile = () => (
  <Grid>
    <Navbar/>
    <UserProfileEmail/>
  </Grid>
)
