import React, { Component } from 'react';
import {Button, Card, TextField, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from './../actions/postActions';


class Postform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
      this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
      e.preventDefault();
      const post ={
          title: this.state.title,
          body: this.state.body
      }
      this.props.createPost(post);
  }

  render() {
    return (
      <Card>
        <Typography variant="h2" align="center">Add Post</Typography>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="formInput">
            <TextField fullWidth 
              label="Title"
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div className="formTextArea">
            <TextField fullWidth 
            label="Body"
            multiline={true}
            
              name='body'
              type='textarea'
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <Button className="formButton" fullWidth  variant="contained"  type='submit'>Upload</Button>
        </form>
      </Card>
    );
  }
}

Postform.propTypes ={
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform);
