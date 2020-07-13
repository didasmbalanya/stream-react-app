import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamEdit extends Component {
  onSubmit = (values) => {
    this.props.editStream(this.props.stream.id, values);
  };

  checkExists = () => {
    if (!this.props.stream) {
      return <div>STREAM NOT FOUND</div>;
    }
    return (
      <div>
        <h3>Stream Edit</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, "description", "title")}
        />
      </div>
    );
  };

  componentDidMount() {
    const { match, fetchStream } = this.props;
    fetchStream(match.params.id);
  }

  render() {
    return <div>{this.checkExists()}</div>;
  }
}

const mapStateToProps = ({ streams }, { match: { params } }) => {
  return { stream: streams[params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
