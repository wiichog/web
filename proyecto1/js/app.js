import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return(
        <NumberButton></NumberButton>
        );
  }
}

class NumberButton extends React.Component {

  render () {
    return(
        <div style={styles.firstScreen}>
        </div>
        );
  }
}

let styles = {
  firstScreen: {
    height : 100,
    width: 100,
    backgroundColor: 'steelblue',
  },
  
}


render(<App/>, document.getElementById('app'));