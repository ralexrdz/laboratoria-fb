import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import endSession from '../actions/action-end-session'

import Post from './Post'
import './PostList.css';

class PostList extends Component {
  closeSession () {
    this.props.endSession()
  }
  render() {
    let postList = this.props.posts.map(p => {
      return <Post post={p} key={p.id} editing={false}/>
    })
    return (
      <div id="post-list">
        <button id="cerrar-sesion" onClick={this.closeSession.bind(this)}>Cerrar sesión de {this.props.session}</button>
        <h1>Posts</h1>
        <div id="newPost">
          <Post editing={true} newPost={true}/>
        </div>
        <div>{postList}</div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts,
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({endSession}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
