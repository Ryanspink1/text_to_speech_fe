import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Navbar from './Navbar'
import Recorder from './Recorder';
import SpeechConversionList from './SpeechConversionList';


export const SpeechToTextPage = () => (
  <Grid className="text-and-speech-grid">
    <Navbar/>
    <Recorder/>
    <SpeechConversionList />
  </Grid>
)
