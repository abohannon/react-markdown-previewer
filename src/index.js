import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Marked from 'marked';

// create components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n',
      outputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div className="inner" style={{textAlign: 'center'}}>
        <h2>React Markdown Previewer</h2>
        <UserInput input={this.state.inputValue} handleInput={this.handleChange}/>
        <UserOutput input={this.state.inputValue}/>
      </div>
    );
  }
}

class UserInput extends React.Component {
  render() {

    const textareaStyle = {
      width: "100%",
      height: "75vh",
      border: "1px solid grey",
      resize: "vertical"
    };

    return (
      <div className="col-md-6 input-area">
        <h1>Input</h1>
        <textarea className="user-input" style={textareaStyle} value={this.props.input} onChange={this.props.handleInput}/>
      </div>
    );
  }
}

class UserOutput extends React.Component {


  renderMarkup(){
    return {
      __html: Marked(this.props.input, {sanitize: true})
    };
  }

  render() {

    const outputStyle = {
      width: "100%",
      height: "75vh",
      textAlign: "left",
      wordWrap: "break-word"
    };

    return (
      <div className="col-md-6 output-area">
        <h1>Output</h1>
        <div style={outputStyle} dangerouslySetInnerHTML={this.renderMarkup()} />
      </div>
    );
  }
}

// render app

ReactDOM.render(
  <App/>, document.querySelector('.container'));
registerServiceWorker();
