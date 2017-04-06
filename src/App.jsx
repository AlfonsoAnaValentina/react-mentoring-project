import React, {Component} from 'react';
import Main from './components/Main.jsx';

class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      task: 'sub-task'
    };
  }

   render() {
    return (
      <Main {...this.state} />
    );
  }
}
export default App;
