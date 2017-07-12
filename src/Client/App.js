import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';




class App extends Component {
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
