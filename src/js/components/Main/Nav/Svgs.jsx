import React from "react";

import initializePaths from "./initializePaths.js";

export default class Svgs extends React.Component {
  constructor() {
    super();
    this.state = {
      attrs : [{
          class: "triangle-one",
          stroke: "#000",
          strokeWidth: "1",
          fill: "none",
          d: "M 100,200 200,0 0,0 z",
          strokeDasharray: "",
          strokeDashoffset: "988.00"
        },{
          class: "triangle-two",
          stroke: "#000",
          strokeWidth: "1",
          fill: "none",
          d: "M 100,0 200,200 0,200 z",
          strokeDasharray: "",
          strokeDashoffset: "988.00"
        },{
          class: "triangle-three",
          stroke: "#000",
          strokeWidth: "1",
          fill: "none",
          d: "M 100,200 200,0 0,0 z",
          strokeDasharray: "",
          strokeDashoffset: "988.00"
        }
      ],
      components: {}
    };
  }

  componentWillMount() {
    var svgs = this.state.attrs.map(function(attr, i) {
      return (
        <svg key={`svg_${i}`} class={attr.class}>
          <path stroke={attr.stroke} strokeWidth={attr.strokeWidth}
            fill={attr.fill}
            d={attr.d}
            strokeDasharray={attr.strokeDasharray}
            strokeDashoffset={attr.strokeDashoffset} />
        </svg>
      );
    });

    this.setState({components: svgs});
  }

  componentDidMount() {
    const paths = document.getElementsByTagName('path');
    initializePaths(paths);
  }

  render() {
    return (
      <div class="menu-options">
        {this.state.components}
      </div>
    );
  }
}
