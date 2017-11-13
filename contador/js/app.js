import {createStore} from 'redux';
var React = require('react');
var ReactDOM = require('react-dom');

var number =0
function rootReducer(state, action){
    switch(action.type){
        case 'add':
            return Object.assign({}, state, {
              number: number + 1
            });
            break;
        default:
            return state;
    }
}

let store = createStore(rootReducer);
console.log(store);


class App extends React.Component {
    constructor(props) {
        super(props);
        store.subscribe(()=>{
            number = store.getState().number;
        });
        this.state = {
          number: '0',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        store.dispatch({type: 'add'});
        this.setState({
          number: store.getState().number,
        });
    }
  render () {
    return(
        <div onClick={this.handleClick}>
        <Text number={this.state.number} ></Text>
        </div>
        );
  }
}


class Text extends React.Component {
  render () {
    return(
        <div>
            <h1 >Hello Denis! click the counter -> {this.props.number}</h1>
        </div>
        );
  }
}

ReactDOM.render(<App/>,  document.getElementById("app"));