import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ciud from 'cuid'
import moment from 'moment'

import addPost from '../actions/action-add-post'
import updatePost from '../actions/action-update-post'
import removePost from '../actions/action-remove-post'

import './Post.css';

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.post ? props.post.text : '',
      editing: props.editing ? props.editing : false,
      newPost: props.newPost ? props.newPost : false
    }
  }
  add () {
    this.props.addPost({
      author: this.props.session,
      text: this.state.text,
      date: new Date(Date.now()),
      id: ciud()
    })
  }
  save () {
    this.setState({editing: false})
    this.props.updatePost({
      text: this.state.text,
      id: this.props.post.id
    })
  }
  cancelSaving () {
    this.setState({editing: false})
  }
  edit () {
    this.setState({text: this.props.post.text})
    this.setState({editing: true})
  }
  remove () {
    if (window.confirm('¿Deseas eliminar este post?'))
      this.props.removePost(this.props.post.id)
  }
  textChanged (event) {
    this.setState({text: event.target.value})
  }
  render() {
    let editing = this.state.editing
    let newPost = this.state.newPost
    let imAuthor = this.props.post ? this.props.session === this.props.post.author : false
    let post = this.props.post ? this.props.post : {text: ''}
    console.log(post)
    return (
      <div>
      { editing ? (
          <div className="post">  
            <textarea placeholder="¿Qué está pasando?" value={this.state.text} onChange={this.textChanged.bind(this)}></textarea>
            { newPost ? (
                <div className="botones">
                  <button onClick={this.add.bind(this)}>Publicar</button> 
                </div>
              ) : (
                <div className="botones">
                  <button onClick={this.save.bind(this)}>Guardar</button>
                  <button onClick={this.cancelSaving.bind(this)}>Cancelar</button>
                </div>
              )
            }
          </div>
        ) : (
          <div className="publicacion">
            <div className="titulo">{post.author} <span className="tiempo">{moment(post.created).fromNow()}</span></div>
            <p>{post.text} </p>
              { imAuthor ? (
                  <div className="botones">
                    <button onClick={this.edit.bind(this)}>Editar</button>
                    <button onClick={this.remove.bind(this)}>Eliminar</button>
                  </div>
                ) : <div className="botones"><button>Like</button></div>
              }
          </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addPost, 
      removePost,
      updatePost
    }, 
    dispatch
  );
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Post);
