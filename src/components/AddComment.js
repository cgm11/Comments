import React, { Component } from "react";

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }

  handleChange = (event) => this.setState({ body: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBody(this.state.body);
    this.setState({ body: "" });
  };

  getStyle = () => {
    return {
      background: "#e5e5e5",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <form className="ui reply form" onSubmit={this.handleSubmit}>
          <div className="field">
            <input
              type="text"
              className="body"
              placeholder="Add comment"
              onChange={this.handleChange} 
              style={{width: "100%"}}
            />
          </div>
          <input
            className="ui blue labeled submit icon button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
