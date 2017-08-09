import React, { Component } from 'react';

// class
class MarkdownOutput extends Component {
  constructor(props) {
    super(props);

    this.state = { output: ''};
  }

  render() {
    return (
      <div className="col-sm-6 output-area">
        <h1>Output</h1>
      </div>
    );
  }

}

export default MarkdownOutput;
