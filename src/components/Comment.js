import React, { Component } from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

class Comment extends Component {
    render() {
        return this.props.comments.map((item) =>             
            <CommentItem key={item.id} comment={item} 
            delComment={this.props.delComment}/>
        )
    };
}

Comment.propTypes = {
    comments: PropTypes.array.isRequired
}

export default Comment;