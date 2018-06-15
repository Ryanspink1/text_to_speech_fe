import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Radio } from 'semantic-ui-react';
import { changeAppState } from '../actions/index'
import store from '../store/index';


const mapDispatchToProps = dispatch => {
  return {
    changeAppState: () => dispatch(changeAppState())
  };
};

const mapStateToProps = state => {
  return {
    speechToText: state.speechToText
  };
};

class ConnectedSwitchConversionRadio extends Component{
  constructor(){
    super();
    this.state={
    }
  }

  handleChangeApps(){
    this.props.changeAppState();
  }


  render(){
    let checked = this.props.speechToText

    return(
      <Radio fitted toggle id="switch-conversion-radio" onChange={this.handleChangeApps.bind(this)} checked={checked} />
    )
  }
}

const SwitchConversionRadio = connect( mapStateToProps, mapDispatchToProps)(ConnectedSwitchConversionRadio)
export default SwitchConversionRadio
