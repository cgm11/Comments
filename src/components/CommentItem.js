import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentItem extends Component {
  getStyle = () => {
    return {
      background: "#e5e5e5",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id, body, name, email } = this.props.comment;
    return (
      <div className="ui comments" style={this.getStyle()}>
        <div className="comment">
          <div className="content">
            <p className="author">{name}</p>
            <div className="metadata">
              <span className="date">{email}</span>
            </div>
            <div className="text">{body}</div>
            <div className="actions">
              <button className="summitButton"onClick={this.props.delComment.bind(this, id)}>X</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};
