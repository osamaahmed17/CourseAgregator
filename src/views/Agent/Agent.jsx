import React, { Component } from 'react';
import { Parallax } from 'react-parallax';



class Agent extends Component {
  showAlert() {
    alert("Success");
  }
  render() {
    return (
      <div className="Home">
        <Parallax bgImage={require('images/bg.jpg')} >
          <h1>WELCOME</h1>
          <h5>Contact {this.props.location.state.agent}</h5>
          <div className="row" >
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="Email" type="email" className="validate" />
                  <label for="Email">Please Enter Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="Query" type="text" className="validate" />
                  <label for="Query">Please Enter your Query</label>
                </div>
                <div onClick={this.showAlert} className="waves-effect waves-light btn">Submit</div>
              </div>
            </form>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default Agent;
