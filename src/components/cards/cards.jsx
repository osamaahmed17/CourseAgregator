import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Cards extends Component {


    constructor(props) {
        super(props)
        this.state = {
            agents: this.props.agents

        }
    }
    render()
    {
      //  console.log(this.props.location.agents)
     if(this.props.Ctype==="Cdesc"&&this.props.previousField===this.props.data.coursetype){
      
        return(
          <div className="row"> 
          <div className="col s12 m12">
            <div className="card darken-1">
              <div className="card-content black-text">
                <span className="card-title">{this.props.data.Title}</span>
                <table>
                <tbody>
                    <tr><th>University Name</th><td>{this.props.data.University}</td></tr>
                    <tr><th>Fee</th><td>{this.props.data.Fees}</td></tr>
                    <tr><td rowSpan="2">{this.props.data.Description}</td></tr>
                </tbody>
                </table>
              </div>
            <div className="card-action">
                        <Link to={{ pathname: '/CoursesContent', state: { title: this.props.data.Title, userId: this.props.data.id,description:this.props.data.Description,coursetype:this.props.data.coursetype, agents: this.state.agents }}}>Click Me</Link>
            </div>
            </div>
          </div>
        </div> 
      );
      }
      else if(this.props.Ctype==="btn"){
        return(
        <div className="row">
        <div className="col s12 m12">
          <div className="card  darken-1">
            <div className="card-content black-text">
              <span className="card-title">{this.props.data.name}</span>
              <p>
              {this.props.data.desc}
              </p>
            </div>
            <div className="card-action">
              <Link to={{pathname: '/CourseHome' , feild:this.props.data.feild}}><p>Select Course</p></Link>
            </div>
          </div>
        </div>
      </div> 
    );
    
    }else{
      return(<br/>
      );
    }
    }
    }
export default Cards;


