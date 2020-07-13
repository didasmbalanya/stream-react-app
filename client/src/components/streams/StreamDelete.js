import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import { deleteStream, fetchStream } from "../../actions/index";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    const { stream, match } = this.props;
    if (!stream) {
      return <div>STREAM NOT FOUND</div>;
    }

    return (
      <Modal
        header="Delete Stream"
        content={`Are you sure you want to delete this stream with title: ${
          this.props.stream && this.props.stream.title
        }?`}
        action="Delete"
        onClick={() => deleteStream(match.params.id)}
        onDismiss={() => history.push("/streams")}
      />
    );
  }
}

const mapStateToProps = ({ streams }, { match: { params } }) => {
  return { stream: streams[params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
