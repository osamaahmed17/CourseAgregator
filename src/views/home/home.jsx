import React, { Component } from 'react';
import Card from 'components/cards/cards.jsx';
import { Parallax } from 'react-parallax';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coursetypes:[{name:"Computing", desc: "Computing is any activity that uses computers. It includes developing hardware and software, and using computers to manage and process information, communicate and entertain. Computing is a critically important, integral component of modern industrial technology" ,feild: "comp"},{name:"Accounting", desc: "Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities such as businesses and corporations. ",feild: "acc"},{name:"Health", desc: "Medicine is the science and practice of the diagnosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illnes", feild: "hel"},{name:"Mechinical", desc: "Mechanical engineering is the discipline that applies engineering, physics, engineering mathematics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems.",feild: "m"}]
       
      };
  }    
  

  render() {

    return (
      
      <div className="Home">
      <Parallax bgImage={require('images/bg.jpg')} >
        <main className="container">
        <br/>
         { 
         this.state.coursetypes.map((value,id) => {
                    return (
                            <Card key={id} Ctype="btn" data={value}/>
                    )
                })}
        </main>
        </Parallax>
      </div>

    );
  }
}

export default Home;
