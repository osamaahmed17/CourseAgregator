import React, { Component } from "react";
import M from 'materialize-css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
           universty:'Deakin',
           experience:'5',
           fees:'500000',
           country:'USA',
           coursetype:'Master'
        }
        this.updateExperience=this.updateExperience.bind(this)
        this.handleExperienceChange=this.handleExperienceChange.bind(this)
        
        this.updateUniversity=this.updateUniversity.bind(this)
        this.handleUniversityChange=this.handleUniversityChange.bind(this)
     

        this.updateFees=this.updateFees.bind(this)
        this.handleFeesChange=this.handleFeesChange.bind(this)
     

        this.updateCountry=this.updateCountry.bind(this)
        this.handleCountryChange=this.handleCountryChange.bind(this)
        
        
        
        this.updateCourseType=this.updateCourseType.bind(this)
        this.handleCourseTypeChange=this.handleCourseTypeChange.bind(this)
       
    }
    
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    }

    //set the state but its not updated
    updateExperience = (event) => {
        this.setState({experience:event.target.value});
    }
    updateUniversity = (event) => {
        this.setState({universty:event.target.value});
    }
    updateFees = (event) => {
        this.setState({fees:event.target.value});
    }
    updateCountry = (event) => {
        this.setState({country:event.target.value});
    }
    updateCourseType = (event) => {
        this.setState({coursetype:event.target.value});
    }


    componentDidUpdate(prevProps, prevState) {
        var _experience=1;
        var _university=1;
        var _fees=1;
        var _country=1;
        var _courseType=1;
        if (prevState.experience!=this.state.experience) {
            this.setState ({experience:this.state.experience},this.handleExperienceChange(_experience))
        }
        if(prevState.university!=this.state.university){
            this.setState({universty:this.state.university},this.handleUniversityChange(_university))
        }
        if(prevState.fees!=this.state.fees){
            this.setState({fees:this.state.fees},this.handleFeesChange(_fees))
        }
        if(prevState.country!=this.state.country){
            this.setState({country:this.state.country},this.handleCountryChange(_country))
        }
        if(prevState.coursetype!=this.state.coursetype){
            this.setState({coursetype:this.state.coursetype},this.handleCourseTypeChange(_courseType))
        }
    }
      
//Once the state is changed than it forwards the updated state
    handleExperienceChange = (_experience) => {
        if(_experience===1)
        {
           var Experience=this.state.experience;
           this.props.dataexperience(Experience)  
        }        
    }
    
    handleUniversityChange = (_university) => {
        if(_university===1)
        {
           var University=this.state.universty;
           this.props.datauniversity(University)  
        }        
    }
   
    handleFeesChange = (_fees) => {
        if(_fees===1)
        {
          var Fees=this.state.fees;
          this.props.datafees(Fees)  
        }        
    }
    handleCountryChange = (_country) => {
        if(_country===1)
        {
          var Country=this.state.country;
          this.props.datacountry(Country)  
        }        
    }
    handleCourseTypeChange = (_courseType) => {
        if(_courseType===1)
        {
          var CourseType=this.state.coursetype;
          this.props.datacoursetype(CourseType)  
        }        
    }



   
   //for handling two 
    onChangedExperience = (event) =>{
        this.handleExperienceChange();
        this.updateExperience(event);
        
    }

    onChangedUniversity= (event) =>{
        this.handleUniversityChange();
        this.updateUniversity(event);
        
    }
   
    onChangedFees = (event) =>{
        this.handleFeesChange();
        this.updateFees(event);
        
    }
    onChangedCountry = (event) =>{
        this.handleCountryChange();
        this.updateCountry(event);
        
    }
    onChangedCourseType = (event) =>{
        this.handleCourseTypeChange();
        this.updateCourseType(event);
        
    }
    
    
    render() {
        
      
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                <h6><b>Filteration Center</b></h6>
                <br></br>
                <h7><b>Select University</b></h7> 
                <div className="input-field col s12">
                <select id="University" onChange={this.onChangedUniversity}>
                    <optgroup label="University">
                        <option value="Deakin">Deakin</option>
                        <option value="RMIT">RMIT</option>
                    </optgroup>
                    </select>
                </div>
                <h7><b>Number of experience</b></h7> 
                <div className="input-field col s12">
                <select id="Experience" onChange={this.onChangedExperience}>
                    <optgroup label="Experience">
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </optgroup>
                    </select>
                </div>
                <h7><b>Fees</b></h7> 
                <div className="input-field col s12">
                <select  id="Fees" onChange={this.onChangedFees}>
                    <optgroup label="Fees">
                        <option value="500000">500000</option>
                        <option value="600000">600000</option>
                    </optgroup>
                    </select>
                </div>
                <h7><b>Country</b></h7>
                <div className="input-field col s12">
                <select id="Country" onChange={this.onChangedCountry}>
                    <optgroup label="Country">
                        <option value="USA">USA</option>
                        <option value="Pakistan">Pakistan</option>
                    </optgroup>
                    </select>
                </div>
                <h7><b>Course Type</b></h7>
                <div class="input-field col s12">
                <select id="CourseType" onChange={this.onChangedCourseType}>
                    <optgroup label="Course Type">
                        <option value="Master">Master</option>
                        <option value="PHD">PHD</option>
                        <option value="Bachelor">Bachelor</option>
                    </optgroup>
                    </select>
                </div>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                          <i className="medium material-icons">search</i>
                </a>
            </div>
        );
    }
}

export default Sidebar;