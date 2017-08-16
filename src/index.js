import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// create components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
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
      border: "1px solid grey"
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
  render() {

    const outputStyle = {
      width: "100%",
      height: "75vh",
      textAlign: 'left'
    };

    return (
      <div className="col-md-6 output-area">
        <h1>Output</h1>
        <div style={outputStyle}>
          <p>{this.props.input}</p>
        </div>
      </div>
    );
  }
}

// render app

ReactDOM.render(
  <App/>, document.querySelector('.container'));
registerServiceWorker();
