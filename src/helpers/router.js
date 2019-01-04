import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';

export const history = createHistory();

export default class BrowserRouter extends Component {
  render() {
    return <Router history={history} children={this.props.children} />
  }
}
