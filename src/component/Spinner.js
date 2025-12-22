import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="Spinner-container text-center">
          <div className="spinner-border text-primary " role="status"/>
        </div>
      </>
    );
  }
}
