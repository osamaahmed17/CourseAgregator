
import React, { Component } from 'react';
import profile from 'images/download.jpg';
import { Link } from 'react-router-dom';

class Collectionitem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agents: this.props.data.Agent,
      id: this.props.data.id

    }
  }
  render() {

    return (
      <li className="collection-item avatar">
        <img src={profile} alt="" className="circle"></img>
        <span className="title">{this.state.id}</span>
        <p>{this.state.agents}
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        <Link to={{ pathname: '/Agent', state: { agent: this.state.agents, id: this.state.id } }}><button className="btn waves-effect waves-light" type="submit" name="action">Show More</button></Link><div className="card-content"></div>
      </li>

    );
  }
}

export default Collectionitem;



