import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamCreate extends Component {
  onSubmit = (values) => {
    this.props.createStream(values);
  };

  render() {
    return (
      <div>
        <h3>Stream Create</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
