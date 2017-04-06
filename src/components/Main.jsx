import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="main">
        sub-task : {this.props.task}
      </div>
    );
  }
}

export default Main;