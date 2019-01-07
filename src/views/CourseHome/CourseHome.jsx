import React, { Component } from 'react';
import Cards from 'components/cards/cards.jsx'
import LoadingComponent from 'components/loading/loading.jsx';
import API from 'helpers/api.js';


class CourseHome extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            catalogue:[],
            agents:[]
           

        }
    }
    componentDidMount() {
        this.getCourses();
        this.getAgents();
      }
    
      stateHandler = (state) => {
        this.setState(state);
      }
    
      getCourses = () => {
        API.getCourses(this.stateHandler);
      }
      getAgents = () => {
        API.getAgents(this.stateHandler);
      }
    
  render() {
    
    if (this.state.catalogue.length == 0) return <LoadingComponent/>;
    if (this.state.agents.length == 0) return <LoadingComponent/>;

    return (
      <div className="Courses">
      <div className="container">
   
      <div>     
           {
            this.state.catalogue.map((value,id) => {
                        return (
                            <div>
                                <Cards key={id} showButton="true" data={value} agents={this.state.agents}/>
                                </div>
                        )

                    })
                }
            </div>
            </div>
      </div>
    );
  }
}

export default CourseHome;