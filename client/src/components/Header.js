import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/streams" className="item">
        Streamzy
      </Link>
      <div className="right menu">
        <Link to="/streams" className="item">
          All streams
        </Link>
        {auth.isSignedIn ? (
          <Link to="/streams/new" className="item">
            Create Stream
          </Link>
        ) : null}
        <GoogleAuth />
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
