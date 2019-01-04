import React, { Component } from 'react'
import './App.scss'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons/iconfont/material-icons.css'
import Header from 'components/header.jsx'
import AppHelper from "helpers/AppHelper.js";
import Footer from 'components/footer.jsx';
import LoadingComponent from 'components/loading/loading.jsx';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { requestAccessTokenLogin } from 'actions';
import Login from 'views/login/login.jsx';
import Home from 'views/home/home.jsx';
import Team from 'views/team/team.jsx';
import CourseHome from 'views/CourseHome/CourseHome.jsx'
import CoursesContent from 'views/CoursesContent/CoursesContent.jsx'
import Agent from 'views/Agent/Agent.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'DLP React Boilerplate',
    };
  }

  // Used to handle state from children
  stateHandler = (state) => {
    this.setState(
      state
    )
  }

  componentDidMount() {
    let token = ''
    if ((token = AppHelper.isUserLocalStorageLoggedIn())) {
      if (token === 'true') return;
      this.props.dispatchAccessTokenLogin(token)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    if (this.props.loading) return (<LoadingComponent />);
    else return (
      <div className="App">
        {/* Header */}
        {this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ? <Header title={this.state.title} logout={this.stateHandler} /> : ''}
        
        {/* Main body */}
        <Switch>
          
          <Route exact path='/' render={(props) => (this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ?
            <Redirect to='/CourseHome' /> : <Login parentState={this.state} parentProps={this.props} /> )}
          />

          <Route exact path='/team' render={(props) => (this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ? 
            <Team {...props}/> : <Redirect to='/' /> )} 
          />

          <Route exact path='/CourseHome' render={(props) => (this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ? 
            <CourseHome {...props}/> : <Redirect to='/' /> )} 
          />

          <Route exact path='/test' render={() => <div>Test</div>} />
  
            <Route exact path="/CoursesContent" component={CoursesContent} />
            <Route exact path='/Agent' component={Agent}/>
          <Route render={() => <div>404 Error</div>} />

        </Switch>

        {/* Footer */}
        {this.props.loggedIn || AppHelper.isUserLocalStorageLoggedIn() ? <Footer /> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginStatus.loggedIn,
    loading: state.loginStatus.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAccessTokenLogin: (token) => dispatch(requestAccessTokenLogin(token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
