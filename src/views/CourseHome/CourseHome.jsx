import React, { Component } from 'react';
import Cards from 'components/cards/cards.jsx'
import LoadingComponent from 'components/loading/loading.jsx';
import API from 'helpers/api.js';
import { Parallax } from 'react-parallax';


class CourseHome extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            catalogue:[],
            agents:[],
            search:'',
            tempcatalogue:[]
                      

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
            
  
  render() {
    
    if (this.state.catalogue.length === 0) return <LoadingComponent/>;
    if (this.state.agents.length === 0) return <LoadingComponent/>;

    let filteredCourses=this.state.catalogue.filter(
      (catalogue)=>{
        return catalogue.Title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    
      
  );
  this.state.tempcatalogue=filteredCourses;
  console.log(this.state.tempcatalogue)
    return (
    
      <div className="Courses">
        <Parallax bgImage={require('images/bg.jpg')} >
          <div className="container">
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

