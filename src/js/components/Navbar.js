import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom'
import { logout } from "../actions/index"
import SwitchConversionRadio from './SwitchConversionRadio'


const mapDispatchToProps = dispatch => {
  return {
    logout: loggedIn => dispatch(logout(loggedIn))
  };
};

const colorsA = [['Convert Phrase','teal', 'convert'], ['Profile','green', 'profile']]
const colorFromPathname = {'/convert': 'teal', '/profile': 'green'}

class ConnectedNavbar extends Component{
  constructor(){
    super();
    this.state = {
      activeA: colorsA[0][1]
    };
  }

  loggedOut(){
    this.props.logout()
    document.body.id = '';
  }

  componentDidMount(){
    const path = window.location.pathname
    const color = colorFromPathname[path]
    this.setState({
      activeA: color
    })
  }

  render() {
    const { activeA} = this.state

    return(
      <Grid.Row centered>
        <Grid.Column width={16}>
          <Menu inverted borderless id='nav-menu' size={'huge'}>
            <Menu.Item header fitted='vertically'>
              <img src='https://s3-us-west-2.amazonaws.com/rs-text-to-speech/106fb4640b295eeaf938754c630c2891.png'/>
            </Menu.Item>
            <Menu.Item header fitted='vertically' id='nav-name'>
              <p>Text to Speech</p>
            </Menu.Item>
            <Menu.Item header fitted='vertically' id='nav-toggle'>
              <SwitchConversionRadio/>
            </Menu.Item>
            <Menu.Item header fitted='vertically' id='nav-name'>
              <p>Speech To Text</p>
            </Menu.Item>
            <Menu.Menu position='right'>
              {colorsA.map(c => (
                <NavLink key ={ c[1] } to={ c[2] }>
                  <Menu.Item
                    key={ c[1] }
                    name={ c[0] }
                    active={ activeA === c[1] }
                    color={ c[1] }
                    value={ c }
                  />
                </NavLink>
              ))}
              <Menu.Item
                id='logout-button'
                key={ 'red' }
                name={ 'Logout' }
                active={ activeA === 'red' }
                color={ 'red' }
                onClick={ this.loggedOut.bind(this) }
              />
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const Navbar = connect(mapDispatchToProps, { logout })(ConnectedNavbar)
export default Navbar
