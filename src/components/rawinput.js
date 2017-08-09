import React, { Component } from 'react';

// class
class RawInput extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: ''};

  }

  render() {
    return (
      <div className="col-sm-6 input-area">
        <h1>Input</h1>
        <input className="rawinput" value={this.state.markdown} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }


  onInputChange(markdown) {
    this.setState({markdown});
    console.log(this.setState({markdown}));
  }

}

export default RawInput;
