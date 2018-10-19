import React, { Component } from "react";
import { connect } from "react-redux";
import { clearFormError } from "../actions/index";

const mapStateToProps = state => {
  return { formError: state.formError }
}

const mapDispatchToProps = dispatch => {
  return {
    clearFormError: formError => dispatch(clearFormError(formError)),
  };
};

class ConnectedFormError extends Component {
  constructor(){
    super();
    this.state={};
  }

  componentWillReceiveProps(){
    let clearError = () =>{
      if(this.props.formError !== null){
        this.props.clearFormError('');
      }
    }
    setTimeout(clearError, 4000);
  }

  render(){
    let errorMessage
    let errorStyle

    if(this.props.formError === 'blank'){
      errorMessage = 'Input(s) may not be blank.'
      errorStyle = {
        color: 'red'
      }
    }else if(this.props.formError === 'login'){
      errorMessage = 'Invalid Login Credentials'
      errorStyle = {
        color: 'red'
      }
    }else if(this.props.formError === 'signUp'){
      errorMessage = 'Incorrect format or username taken.'
      errorStyle = {
        color: 'red'
      }
    }

    let error = (this.props.formError !== null)
      ? <p style={ errorStyle }>{ errorMessage }</p>
      : <span/>

    return(
      <div id='form-errors'>{ error }</div>
    )
  }
};

const FormError = connect(mapStateToProps, mapDispatchToProps)(ConnectedFormError);

export default FormError;
