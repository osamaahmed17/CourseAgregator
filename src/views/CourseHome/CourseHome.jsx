import React, { Component } from 'react';
import Cards from 'components/cards/cards.jsx'
import axios from 'axios';

class CourseHome extends Component {
   
    
    constructor(props) {
        super(props);
       
        this.state = {
            catalogue:[],
            data: [{
                "userId": "card 1",
                "id": 1,
                "title": "delectus aut autem",
                "completed": false,
                "linked" :"maincardview",
              
            },{
                "userId": "card 2",
                "id": 1,
                "title": "delectus aut autem",
                "completed": false,
                "linked" :"maincardview",
                
            },{
                "userId": "card 3",
                "id": 1,
                "title": "delectus aut autem",
                "completed": false,
                "linked" :"maincardview",
            

            },{
                "userId": "card 4",
                "id": 1,
                "title": "delectus aut autem",
                "completed": false,
                "linked" :"maincardview",
               

            }
            ,{
                "userId": "card 5",
                "id": 1,
                "title": "delectus aut autem",
                "completed": false,
                "linked" :"maincardview",
       
            }],
            agents:[{
                "id": 1,
                "Agent":"Osama Ahmed Tahir"
            },{
             
                "id": 2,
                "Agent":"Ali Jasim"
            },{
                
                "id": 3,
                "Agent":"MukhtaBani"

            },{
                "id": 4,
                "Agent":"Sanchit"

            }
            ,{
                "id": 5,
                "Agent":"Ali"
            }]

        }
    }
    componentDidMount() {
        axios({
          method: "get",
          url: "https://launchpad-red.au-syd.mybluemix.net/agregator/api/courses",
          withCredentials: false,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
          .then(response => {
            if (response && response.data) {
              this.setState({ catalogue: response.data });
            }
          })
          .catch(error => console.log(error));
      }
    
  render() {
    console.log(this.state.catalogue)
    return (
      <div className="Courses">
      <div className="container">
      <div>     
           {
             this.state.data.map((value,id) => {
                        return (
                                <Cards key={id} showButton="true" data={value} agents={this.state.agents}/>
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