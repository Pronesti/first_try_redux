import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/postActions';
import {Typography,Card} from '@material-ui/core';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
componentWillReceiveProps(nextProps){
if(nextProps.newPost){
this.props.posts.unshift(nextProps.newPost)
}
}
  render() {
    const postItems = this.props.posts.map(post => (
      <Card className="postDiv" key={post.id}>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body2">{post.body}</Typography>
      </Card>
    ));
    return (
      <div className="postDiv2">
      <Typography variant="h2" align="center">Posts</Typography>
        <div className="posts">
        {postItems}
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
