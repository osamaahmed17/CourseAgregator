import React, { Component } from 'react';
import AppHelper from "helpers/AppHelper.js";
import { connect } from 'react-redux';
import { requestLogout } from 'actions';
import logo from "images/deakin-logo.svg"

class Header extends Component {
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
          <nav>
            <div className="nav-wrapper">
              <div href="#" className="brand-logo center"><img style={Style} src={logo}></img></div>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><div href="badges.html"><i className="material-icons left">view_module</i>Menue</div></li>
              </ul>
            </div>
          </nav>
        </div>
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
