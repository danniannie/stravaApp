import React, { Component } from "react";
import queryString from "query-string";
import * as api from "../api";

class Dashboard extends Component {
  state = {
    segments: [],
  };
  componentDidMount = async () => {
    const code = queryString.parse(this.props.location.search).code;
    console.log("code", code);
    const tokens = await api.authenticate(code);
    console.log(tokens);
    const segments = await api.fetchSegments(tokens.access_token);
    this.setState({ segments });
  };

  render() {
    console.log(queryString.parse(this.props.location.search));
    return (
      <div>
        <p>Hello friend</p>
        <ul>
          {this.state.segments.map((segment) => (
            <>
              <p>Name: {segment.name}</p>
              <p>Start Lat: {segment.start_latitude}</p>
              <p>Start Long: {segment.start_longitude}</p>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
