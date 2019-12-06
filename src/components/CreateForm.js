import React, { Component } from "react";

class CreateForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          name="title"
          value={this.props.title}
          onChange={this.props.onChange}
          placeholder="title"
        />
        <input
          type="text"
          name="url"
          value={this.props.url}
          onChange={this.props.onChange}
          placeholder="url"
        />
        <button type="submit" value="add">
          Submit
        </button>
      </form>
    );
  }
}

export default CreateForm;
