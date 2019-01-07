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
          <h1> {this.props.location.state.userId}</h1>
          <h2> {this.props.location.state.title}</h2>
          <div style={{ height: '200px' }} />
          <div className="container">
            <ul className="collection">
              <div>
                {
                  this.state.agents.map((value, id) => {
                    return (
                      <Collectionitem itemkey={id} showButton="true" data={value} />
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