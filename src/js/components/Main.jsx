// React / ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Components
import Menu from './Main/Menu.jsx';
import Title from './Main/Title.jsx';
import Nav from './Main/Nav.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <main class="main-wrapper">
        <Menu />
        <Title />
        <Nav />
      </main>
    );
  }
}

const wrapper = document.getElementById('content-wrapper');

ReactDOM.render(<Main />, wrapper);
