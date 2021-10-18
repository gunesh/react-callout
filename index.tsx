import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
       
        <div className="">
          Start editing to see some magic happen :)
        </div>

        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
