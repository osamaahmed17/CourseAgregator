import React, { Component } from 'react';
import AppHelper from "helpers/AppHelper.js";
import { connect } from 'react-redux';
import { requestLogout } from 'actions';
import logo from "images/deakin-logo.svg"
import M from 'materialize-css';

class Header extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatchLogout()
    AppHelper.logoutUser()
  }
  componentDidMount(){
    M.Dropdown.init(this.userdropper,{alignment:"right",constrainWidth: false});
    M.Sidenav.init(this.Mnavigate,{menuWidth:300,edge:"left"});   
  }
  logout = (e) => {
    e.preventDefault();
    this.props.dispatchLogout()
    AppHelper.logoutUser()
  }
  render() {
    var Style = {
      width: '58px',
      maxWidth: '100%',
      display: 'block',
      height: 'auto'
    };
    return (
      <header>
      <div className="navbar-fixed">
          <nav className="black lighten-2">
            <div className="nav-wrapper">
             <div className="brand-logo center"><img style={Style} src={logo}></img></div>
          <a href="#!" data-target="slide-out" ref={ (Mnavigate) => {this.Mnavigate = Mnavigate} } className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right">
              <li><a className='dropdown-trigger' ref={ (userdropper) => {this.userdropper = userdropper} } href='#!' data-target='user-dropper'>{window.localStorage.username}<i className="material-icons right">arrow_drop_down</i></a> 
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul id='user-dropper' className='dropdown-content'>
            <li><a className="waves-effect waves-light" href="#!" disabled="disabled">{window.localStorage.username}</a></li>
            
            <li><a onClick={this.logout} className="waves-effect waves-light" href="#!">Logout</a></li>
        </ul>
      </header>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogout: () => dispatch(requestLogout())
  }
}

export default connect(null, mapDispatchToProps)(Header);
