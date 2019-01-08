
import React, { Component } from 'react';
import profile from 'images/download.jpg';
import { Link } from 'react-router-dom';

class Collectionitem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agents: this.props.data.agentName,
      id: this.props.data.id,
      coursetype:this.props.data.coursetype

    }
  }

  render() {
    if(this.props.previoustype===this.props.data.coursetype){
      return (
        <div className="Consultants">
       
        <li className="collection-item avatar">
          <img src={profile} alt="" className="circle"></img>
          <span className="title">{this.state.id}</span>
          <p>{this.state.agents}
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          <Link to={{ pathname: '/Agent', state: { agent: this.state.agents, id: this.state.id , coursetype:this.state.coursetype } }}><button className="btn waves-effect waves-light" type="submit" name="action">Show More</button></Link><div className="card-content"></div>
        </li>
        </div>
      );
    }
    else{
      return (
        <div className="Consultants">
        
         <p>Nothing to Show</p>
         </div>
      );
    }
  }
}

export default Collectionitem;



