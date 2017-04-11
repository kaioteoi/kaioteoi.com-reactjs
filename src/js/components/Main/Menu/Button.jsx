import React from "react";

import './HTMLCollection.forEach.js';
import togglePaths from './togglePaths.js'

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      mainTitle: {},
      paths: {}
    }
  }

  componentDidMount() {
    this.setState({
      mainTitle: document.getElementsByClassName('main-title')[0],
      paths: document.getElementsByTagName('path')
    });
  }

  handleClick(e) {
    this.state.mainTitle.classList.toggle('hidden-text');
    togglePaths(this.state.paths);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} class="menu-button floating"></div>
    )
  }
}
