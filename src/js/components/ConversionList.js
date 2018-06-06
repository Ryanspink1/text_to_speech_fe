import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/index"
import { List,Icon  } from 'semantic-ui-react'

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
       <List.Item key={d.id}>
         <List.Header className="conversion-list-item-header" verticalAlign="top">
           <Icon name="headphones" size="small"/> {d.text}
         </List.Header>
         <List.Description className="conversion-list-item-description">
           <Icon name="microphone" size="small"/> {d.voice}
         </List.Description>
         <List.Content className="conversion-list-item-content">
           <audio id={d.id} controls>
             <source
              type="audio/mpeg"
              src={d.aws_location}/>
          </audio>
        </List.Content>
      </List.Item>);
    return(
        <List divided relaxed>
          {listItems}
        </List>
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
