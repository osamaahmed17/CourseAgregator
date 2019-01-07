import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import photo from 'images/download.jpg';
class Cards extends Component {


    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.data.id,
            title: this.props.data.Title,
            agents: this.props.agents

        }
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src={photo}>
                            </img>
                            <h5>{this.state.title}</h5>
                            <div className="card-action">
                                <Link to={{ pathname: '/CoursesContent', state: { title: this.state.title, userId: this.state.userId, agents: this.state.agents } }}>Click Me</Link>
                                <div className="card-content">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;

