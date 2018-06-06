import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/index"

const mapStateToProps = state => {
  return { conversions: state.conversions,
           loggedIn: state.loggedIn };
}


class ConnectedConversionList extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      conversions: []
    };
  }

  componentWillReceiveProps(){
    this.setState({
        conversions: store.getState().conversions,
        loggedIn: store.getState().loggedIn}
    )
  }


render(){
  if(this.props.loggedIn === true && this.props.conversions.length >=1){
    const data = this.props.conversions
    const listItems = data.map((d)=>
     <li key={d.id}>
       {d.voice}{d.aws_location}
       <audio id={d.id} controls>
         <source
          type="audio/mpeg"
          src={d.aws_location}
         />
      </audio>
     </li>);
    return(
      <ul>
        {listItems}
      </ul>
    )
  }else{
    return(
      <div>
      </div>
    )
  }
}
}

const ConversionList  = connect(mapStateToProps)(ConnectedConversionList);

export default ConversionList
