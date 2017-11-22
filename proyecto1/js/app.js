import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {createStore} from 'redux';

var i = 0;
var p = 0;
var o = 0;
var txt = "Inspired by the many confessions  made by the wonderfully lost and confused young adults in my life. I raise my pen to you.";
var speed = 80;
var change = false;

function rootReducer(state, action){
    switch(action.type){
        case 'FirstScreen':
            return Object.assign({}, state, {
              change: false
            });
            break;
        case 'SecondScreen':
            return Object.assign({}, state, {
              change: true
            });
            break;
        default:
            return state;
    }
}

var store = createStore(rootReducer);
console.log(store);
store.dispatch({type: 'FirstScreen'});
class App extends React.Component {
  constructor(props) {
        super(props);
        store.subscribe(()=>{
          this.setState({change:store.getState().change})
        });
        this.state = {change:false}
    }
    componentDidMount() {
      Line1()
    }
  render () {
    return(
      !this.state.change?<FirstScreen></FirstScreen>:<SecondScreen></SecondScreen>
        );
  }
}

  function Line1() {
    if (i < txt.length) {
      document.getElementById("line1").innerHTML += txt.charAt(i);
      i++;
      if(i==57){
        document.getElementById("line1").innerHTML += "<br />";
      }
      if(i==100){
        document.getElementById("line1").innerHTML += "<br />";
        document.getElementById("line1").innerHTML += "<br />";
      }
      if(i==123){
        store.dispatch({type: 'SecondScreen'});
      }
      setTimeout(Line1, speed);
    }
  }

class FirstScreen extends React.Component{
  render(){
    return(
        <div style={styles.firstScreen}>
        <h3 className="skip" style={styles.skipIntro} onClick={() =>  store.dispatch({type: 'SecondScreen'})}>SKIP  INTRO</h3>
        <div style={styles.firstText}>
        <div id="line1" style={styles.justifyText}></div>
        </div>
        </div>
        )
  }
}

class SecondScreen extends React.Component{
  render(){
    return(
        <div className = "MainScreen" style={styles.firstScreen}>
        <div className = "Button" style={styles.about}>About</div>
        <div className = "Title">Inside<br /> the<br /> Head</div>
        <div className = "Description">Irregular Verses Inspired by The Delusions,<br /> Confusions and Illusions of Young Adults<p /> Written by Denisse Ariana Pérez</div>
        <div className = "StartReading">Start Reading</div>
        </div>
        )
  }
}

let styles = {
    firstScreen: {
        height : screen.availHeight-66,
        width: screen.availWidth,
        backgroundColor: '#1d1842',
        display:'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  },
    firstText:{
        display:'flex',
        flex: 1,
        textAlign: 'center', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color:'white',
        fontSize: 30,
        width : screen.availHeight-300,
  },
  skipIntro:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height:40,
        width:screen.availHeight+30,
  },
  mainScreen:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontSize: 15,
        height:40,
        width:screen.availHeight+30,
  },
  justifyText:{
        color:'white',
  },
  about:{
    width:screen.availHeight+150,
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
}


render(<App/>, document.getElementById('app'));