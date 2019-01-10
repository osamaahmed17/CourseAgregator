import React, { Component } from 'react';
import Cards from 'components/cards/cards.jsx'
import LoadingComponent from 'components/loading/loading.jsx';
import API from 'helpers/api.js';
import { Parallax } from 'react-parallax';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from 'components/sidebar/sidebar.jsx';
import { throws } from 'assert';


class CourseHome extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            catalogue:[],
            agents:[],
            search:'',
            tempcatalogue:[],
            experience:'experience',
            university:'Deakin',
            fees:'',
            coursetype:'',
            country:''
                      

        }
       
    }
    
    updateSearch = (event) => {
      this.setState({search:event.target.value});
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
            
      handleexperience = (experience) => {
        this.setState({experience: experience});
      }
      handleuniversity= (university) => {
        this.setState({university: university});
      }
      handlecountry= (country) => {
        this.setState({country: country});
      }

      handlefees= (fees) => {
        this.setState({fees: fees});
      }

      handlecoursetype= (coursetype) => {
        this.setState({coursetype: coursetype});
      }

  render() {
   
    if (this.state.catalogue.length === 0) return <LoadingComponent/>;
    if (this.state.agents.length === 0) return <LoadingComponent/>;

    let filteredCourses=this.state.catalogue.filter(
      (catalogue)=>{
        return catalogue.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    
      
  );
  this.state.tempcatalogue=filteredCourses;

  
    return (
     
      <div className="Courses">
      <h1>{this.state.experience}{this.state.university}{this.state.fees}{this.state.coursetype}{this.state.country}</h1>
      
        <Parallax bgImage={require('images/bg.jpg')} >
          <div className="container">        
          <div>

          
                <BrowserRouter>
                    <div>
                        <Sidebar dataexperience={this.handleexperience} datauniversity={this.handleuniversity} datafees={this.handlefees} datacountry={this.handlecountry} datacoursetype={this.handlecoursetype}/>
                       
                    </div>
                </BrowserRouter>
                
            </div>
          <input type="text" value={this.state.search} onChange={this.updateSearch} placeholder="Search Courses" />
          <div>     
              {
                this.state.tempcatalogue.map((value,id) => {
                            return (
                                <div>
                                
                                    <Cards key={id} showButton="true" data={value} agents={this.state.agents}  Ctype="Cdesc" previousField={this.props.location.feild}/>
                                  </div>
                            )

                        })
                        
                        
                    }
                    
                </div>
                </div>
                </Parallax>
          </div>
         
        );
      }
    }

export default CourseHome;

