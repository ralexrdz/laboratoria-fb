import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Login from './Login'
import PostList from './PostList'


class App extends Component {
  render() {
    let hasSession = this.props.session
    return (
      <div>
      { hasSession ? (
          <PostList />
        ) : (
          <Login />
        )
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

export default connect(mapStateToProps)(App)
