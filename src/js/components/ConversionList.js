// import React, { Component } from "react";
// import { connect } from "react-redux";
// import store from "../store/index"
// import ConversionListItem from "./ConversionListItem"
//
// const mapStateToProps = state => {
//   return { conversions: state.conversions, loggedIn: state.loggedIn };
// }
//
//
// class ConnectedConversionList extends Component {
//   constructor(){
//     super();
//     this.state = {
//       loggedIn: false,
//       conversions: []
//     };
//   }
//
//   componentWillReceiveProps(){
//     this.setState({
//         conversions: store.getState().conversions,
//         loggedIn: store.getState().loggedIn}
//     )
//   }
//
//
//   render(){
//     const connectedListItems = this.state.conversions.map((cli) =>
//       // <div id={cli.id} voice={cli.voice} text={cli.text} aws_location={cli.aws_location}>
//       <div>
//       </div>
//     );
//     return(
//       <div>
//
//       </div>
//     )
//   }
//
//
// }
//
// const ConversionList  = connect(mapStateToProps)(ConnectedConversionList);
//
// export default ConversionList
