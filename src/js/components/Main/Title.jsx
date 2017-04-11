import React from "react";

export default class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      h1: "Ka io \u00D7 T eo i",
      h2: "F u l l \u00A0 s t a c k \u00A0 d e v"
    };
  }

  render() {
    return (
      <div class="main-title">
        <h1>{this.state.h1}</h1>
        <h2>{this.state.h2}</h2>
      </div>
    );
  }
}
