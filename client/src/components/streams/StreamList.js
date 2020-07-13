import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = ({ userId, id }) => {
    if (userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`streams/delete/${id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList() {
    return this.props.streams.map(({ id, title, description, userId }) => {
      return (
        <div className="item" key={id}>
          {this.renderAdmin({ userId, id })}
          <i className="icon large middle aligned camera" />
          <div className="content">
            <Link to={`streams/${id}`}>{title}</Link>
            <div className="description">{description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Streams </h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => {
  return { streams: Object.values(streams), currentUserId: auth.userId };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
