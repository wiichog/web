import React from 'react';
import {render} from 'react-dom';
var x=0;
var y=0;
var z=0;
var t=0;
var matrix;

httpGet()
document.onkeydown = checkKey;
function httpGet(){
  $.getJSON("http://52.88.26.79:7000/?type=json&w=10&h=10", function(responseText) {
  var div=document.getElementById("app");
  	matrix = responseText;
  	console.log(responseText);
  		div.innerHTML += '<div class="matrix">' + printline(responseText)
  		 + '</div>'
  	
});

}

function printline(line){
	var html ='';
	for(z=0;z<line.length;z++){
		html += '<div class="line" >' + printcharacter(line[z]) + '</div>';
	}
	return html;
}

function printcharacter(lined){
	var html ='';
	for(t=0;t<lined.length;t++){
	if(lined[t]==="+"){
		html += '<div class="wall" id="'+ z+','+t +'"></div>';
	}
	if(lined[t]==="-"){
		html += '<div class="wall" id="'+ z+','+t +'"></div>';
	}
	if(lined[t]==="|"){
		html += '<div class="wall" id="'+ z+','+t +'"></div>';
	}
	if(lined[t]===" "){
		html += '<div class="space" id="'+ z+','+t +'"></div>';
	}
	if(lined[t]==="p"){
		html += '<div class="player" id="'+ z+','+t +'"></div>';
		x = 1;
		y = 1;
	}
	if(lined[t]==="g"){
		html += '<div class="winner" id="'+ z+','+t +'"></div>';
	}
	}
	return html;
}

function move(regla){
	if(regla==="up"){
		var newposition = x+","+(y-1)
		var newdiv = document.getElementById(newposition)
		if(newdiv.className==="wall"){
			alert("Mano eso es una pared, no podes pasar por una pared!")
		}
		else if(newdiv.className==="winner"){
			alert("Mano GANASTE!")
		}
		else{
			var oldposition = x+","+y
			var olddiv = document.getElementById(oldposition)
			newdiv.className = "player"
			olddiv.className = "space"
			y = (y-1)
		}
	}
	if(regla==="down"){
		var newposition = x+","+(y+1)
		var newdiv = document.getElementById(newposition)
		if(newdiv.className==="wall"){
			alert("Mano eso es una pared, no podes pasar por una pared!")
		}
		else if(newdiv.className==="winner"){
			alert("Mano GANASTE!")
		}
		else{
		var oldposition = x+","+y
		var olddiv = document.getElementById(oldposition)
		newdiv.className = "player"
		olddiv.className = "space"
		y = (y+1)
		}
	}
	if(regla==="left"){
		var newposition = (x-1)+","+y
		var newdiv = document.getElementById(newposition)
		if(newdiv.className==="wall"){
			alert("Mano eso es una pared, no podes pasar por una pared!")
		}
		else if(newdiv.className==="winner"){
			alert("Mano GANASTE!")
		}
		else{
		var oldposition = x+","+y
		var olddiv = document.getElementById(oldposition)
		newdiv.className = "player"
		olddiv.className = "space"
		x = (x-1)
		}
	}
	if(regla==="right"){
		var newposition = (x+1)+","+y
		var newdiv = document.getElementById(newposition)
		if(newdiv.className==="wall"){
			alert("Mano eso es una pared, no podes pasar por una pared!")
		}
		else if(newdiv.className==="winner"){
			alert("Mano GANASTE!")
		}
		else{
		var oldposition = x+","+y
		var olddiv = document.getElementById(oldposition)
		newdiv.className = "player"
		olddiv.className = "space"
		x = (x+1)
		}
	}
}




function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        move("up");
    }
    else if (e.keyCode == '40') {
        move("down");
    }
    else if (e.keyCode == '37') {
       move("left");
    }
    else if (e.keyCode == '39') {
       move("right");
    }

}

class App extends React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Hola extends React.Component {
  render () {
    return (
	    <div>
		    <p> Hola Mundo</p>
		    <App name="sofia" />
	    </div>
    );
  }
}


render(<Hola/>, document.getElementById('app'));
