import React from 'react';
import {render} from 'react-dom';

var number1 = 0;
var number2 = 0;
var number = "";
var numbers = false;
var equals = false;
var symbol = "";

class App extends React.Component {
  render () {
    return(
        <Calculadora></Calculadora>
        );
  }
}

class Calculadora extends React.Component{
    constructor(props) {
        super(props);
        this.state = { showNumber: '0' };
        this.handleClick = this.handleClick.bind(this);
    }
      handleClick(e) {
        var element = e.target.firstChild.nodeValue;
        switch(element){
            case "+":
                symbol = "+"
                number = "";
                numbers=true;
                element = null;
                break;
            case "-":
                symbol = "-"
                number = "";
                numbers=true;
                element = null;
                break;
            case "*":
                symbol = "*"
                element = null;
                number = "";
                numbers=true;
                break;
            case "/":
                symbol = "/"
                element = null;
                number = "";
                numbers=true;
                break;
            case "<-":
                number = number.substring(0,number.length-1);
                if(numbers==false){
                    number1 = Number(number);
                }
                else{
                    number2 = Number(number);
                }
                this.setState({showNumber: number});
                element = null;
                break;
            case "AC":
                numbers=false;
                equals = false;
                number1 = 0;
                number2 = 0;
                number = "";
                this.setState({showNumber: '0'});
                element = null;
                break;
            case "=":
                element = null;
                equals = true;
                numbers=true;
                this.setState({showNumber: symbolequals(number1,number2)});
                equals = false;
                break;
        }
        if(element!=null && number.length<=8 && element!=" " && numbers==false && equals==false){
            number = number.concat(element);
            number1 = Number(number);
            this.setState({showNumber: number1});
        }
        if(element!=null && number.length<=8 && element!=" " && numbers==true && equals==false){
            number = number.concat(element);
            number2 = Number(number);
            this.setState({showNumber: number2});
        }
      }
    render(){
        return(
                <div style={styles.container} onClick={this.handleClick} >
                    <Screen Number={this.state.showNumber}></Screen>
                    <Buttons></Buttons>
                </div>
            )
    }
}


function symbolequals(a,b){
        switch(symbol){
            case "+":
                number1 = a+b;
                return number1;
            case "-":
                number1 = a-b;
                return number1;
            case "*":
                number1 = a*b;
                return number1;
            case "/":
                number1 = a/b;
                number1 = number1.toFixed(8);
                return number1;
        }
    }

class NumberButton extends React.Component {

  render () {
    return(
        <div style={styles.button}>{this.props.Number}</div>
        );
  }
}

class Buttons extends React.Component{

    render(){
        return(
            <div style={styles.columns}>
                <div>
                    <NumberButton Number='7' ></NumberButton>
                    <NumberButton Number='4'></NumberButton>
                    <NumberButton Number='1'></NumberButton>
                    <NumberButton Number='<-'></NumberButton>
                    <NumberButton Number=' '></NumberButton>
                </div>
                <div>
                    <NumberButton Number='8'></NumberButton>
                    <NumberButton Number='5'></NumberButton>
                    <NumberButton Number='2'></NumberButton>
                    <NumberButton Number='0'></NumberButton>
                    <NumberButton Number=' '></NumberButton>
                </div>
                <div>
                    <NumberButton Number='9'></NumberButton>
                    <NumberButton Number='6'></NumberButton>
                    <NumberButton Number='3'></NumberButton>
                    <NumberButton Number='AC'></NumberButton>
                    <NumberButton Number=' '></NumberButton>
                </div>
                <div>
                    <NumberButton Number='/'></NumberButton>
                    <NumberButton Number='*'></NumberButton>
                    <NumberButton Number='-'></NumberButton>
                    <NumberButton Number='+'></NumberButton>
                    <NumberButton Number='='></NumberButton>
                </div>
            </div>
            
            );
    }

}

class Screen extends React.Component {
  render () {
    return(
        <div id='screen' style={styles.screen}>{this.props.Number}</div>
        );
  }
}

let styles = {
  button: {
    cursor:'pointer',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    fontSize: 25,
    fontWeight: 'bold',
    width:100,
    height:100,
    margin:10,
  },
  columns:{
    width:500,
    backgroundColor: '#e6e6e6',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  container:{
    backgroundColor: '#e6e6e6',
    width:500,
  },
  screen:{
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#e6e6e6',
    width:490,
    height:100,
    margin:10,
    fontSize: 25,
    fontWeight: 'bold',
  },
}

render(<App/>, document.getElementById('app'));
