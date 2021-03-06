import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    const { stream } = this.props;

    if (!stream) {
      return <div>STREAM NOT FOUND</div>;
    }
    return (
      <div>
        <h1>{stream.title}</h1>
        <p>{stream.description}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match: { params } }) => {
  return { stream: streams[params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
