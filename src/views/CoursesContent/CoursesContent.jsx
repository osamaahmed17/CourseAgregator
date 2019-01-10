import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import Collectionitem from 'components/Collectionitem/Collectionitem.jsx'




class CoursesContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agents: this.props.location.state.agents
    }
  }
  
  render() {
   
      
      return (
        <div className="CoursesContent">
          <Parallax bgImage={require('images/bg.jpg')} >
            <h2> {this.props.location.state.title}</h2>
            <p align="center">{this.props.location.state.description}</p>
            <div style={{ height: '200px' }} />
            <h5>Available Consultants</h5>
            <div className="container">
              <ul className="collection">
                <div>
                  {
                  
                    this.state.agents.map((value, id) => {
                      return (
                          <Collectionitem itemkey={id} showButton="true" data={value}  previoustype={this.props.location.state.coursetype}/>
                      )
                    })
                  }
                </div>
              </ul>
            </div>
          </Parallax>
        </div>
      );
    }
}

export default CoursesContent;