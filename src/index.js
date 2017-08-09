import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RawInput from './components/rawinput';
import MarkdownOutput from './components/output.js';

// create component

class App extends Component {
  render() {
    return (
      <div className="inner">
        <h2>React Markdown Previewer</h2>
        <RawInput />
        <MarkdownOutput />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
registerServiceWorker();
