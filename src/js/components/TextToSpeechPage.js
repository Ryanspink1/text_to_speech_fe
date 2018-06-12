import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import TextToSpeechForm from './TextToSpeechForm';
import ConversionList from './ConversionList';
import Navbar from './Navbar';


export const TextToSpeechPage = () => (
  <Grid className="text-and-speech-grid">
    <Navbar/>
    <TextToSpeechForm/>
    <ConversionList/>
  </Grid>
)
