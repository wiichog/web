import React from 'react';
import ReactDOM from 'react-dom'
import SwipeableViews from 'react-swipeable-views';

class App extends React.Component {
  render () {
    return(
        <MyComponent></MyComponent>
        );
  }
}
var Information = "Juan Luis Garcia Zarceño\n\nCarnet: 14189\n\nSISTEMAS Y TECNOLOGIAS WEB\n\nSECCION:10 "
var description1 = "Descripcion del Proyecto: \n\nEl objetivo de esta tarea es que los alumnos se familiaricen con herramientas y con conceptos que se van a utilizar a lo largo del curso \n\n codepen.io\n\n position: relative\n\n position: absolute\n\n units (px, em, %)\n\n Para cumplir los objetivos, deben hacer una ilustración utilizando únicamente CSS y HTML en codepen.io\n\n Para obtener la nota de esta tarea, deben enviar un link de codepen.io que contenga su ilustración y si utilizaron una imágen de referencia, deben enviar eso también.\n\n Link al github del proyecto:\n\n"
var description2 = "Descripcion del Proyecto: \n\nEl objetivo de esta tarea es que los alumnos pongan en práctica sus conocimientos relacionados con javascript y cómo se manipula el dom.\n\nLa tarea consiste en hacer un juego de memoria, su nota dependerá de qué tecnologias implementen. La nota máxima es un 100%, no hay puntos extra.\n\nLas restricciones del juego de memoria son:\n\nmímimo 16 tarjetas\n\nSe muestran las tarjetas boca abajo\n\nEl usuario selecciona 2 tarjetas, si son pareja se deben quedar boca arriba\n\nEl juego termina cuando todas tarjetas están volteadas, se debe mostrar un mensaje de éxito\n\n Link al github del proyecto:\n\n"
var description3 = "Descripcion del Proyecto: \n\nEl objetivo de esta actividad es que los estudiantes practiquen la comunicación cliente-servidor y el uso de librerías externas de CSS/Javascript para facilitar su trabajo.\n\nLos requerimientos son:\n\nDeben crear una aplicación que liste los mensajes haciendo GET al servidor: 52.88.26.79:7000\n\nSu aplicación debe poder enviar mensajes obtenidos del usuario por medio de POST al servidor: 52.88.26.79:7000\n\nOpcinalmente, pueden utilizar la técnica de long polling para refrescar los mensajes en tiempo real, esta función está implementada en la siguiente url: http://52.88.26.79:7000/poll\n\nPara obtener la nota deben adjuntar a esta tarea un .html que cumpla los requerimientos (o un archivo compreso si utilizaron recursos adicionales)\n\n Link al github del proyecto:\n\n"
var description4 = "Descripcion del Proyecto: \n\nEl objetivo de la actividad es que los alumnos practiquen el procedimiento para crear un stack de desarrollo que permita crear aplicaciones web utilizando react.\n\nPara obtener una puntuación mayor a cero, se deben cumplir los siguientes requemimientos:\n\nLos alumnos deben crear un juego en el que el personaje debe recorrer un laberinto y llegar a la meta\n\nel esquema del laberinto lo deben obtener de la siguiente dirección: http://52.88.26.79:7000/?type=json&w=10&h=10\n\nLos siguientes elementos son paredes, el personaje no puede atravezarlas: | + -\n\nLa posicion inicial del personaje esta indicada por p\n\nLa meta a la que se debe llegar para ganar el juego esta indicada por g\n\n Link al github del proyecto:\n\n"
var description5 = "Descripcion del Proyecto: \n\nLa actividad de hoy consiste en crear una calculadora como una aplicación web.\n\nPara poder optar a la nota, esta debe cumplir los siguientes requerimientos:\n\nLa calculadora debe tener un área de botones y un área de despliegue (display)\n\nEl display debe cumplir los siguientes requisitos:\n\nDebe mostrar los números presionados en la botonera y el resultado de las operaciones\n\nDebe mostrar un máximo de 9 caracteres\n\nSi se ingresan más de 9 números consecutivos, debe ignorarlos\n\nSi el resultado de una operación es mayor a 999999999 debe mostrar un error\n\nSi el resultado de una operación es menor a cero, debe mostrar que el valor es negativo\n\nEl área de botones debe cumplir las siguientes condiciones:\n\nDeben haber botones para los números del 1 al 9 y el cero\n\nAl presionar un número, debe agregarse al final del despliegue (como ocurre en una calculadora convencional)\n\nDebe tener botones para las siguientes operaciones matemáticas: suma, resta y multiplicación\n\nAl presionar una operación, la aplicación debe esperar a que se ingrese un segundo set de números\n\nDebe contener un botón de igual\n\nAl presionar el botón de igual, debe resolver la última operación ingresada\n\nDebe tener un botón de backspace que borre el último número ingresado\n\nDebe tener un botón de clear que borre todos los números y cualquier operación en proceso\n\n Link al github del proyecto:\n\n"
var description7 = "Descripcion del Proyecto: \n\nEl objetivo de ésta actividad es preparar un boilerplate para facilitar proyectos futuros. Este boilerplate se va a utilizar en el laboratorio próximo.\n\nPara éste laboratorio van a tener la nota completa si implementan un simple hello world. Debe cumplir las siguientes condiciones:\n\ndebe mostrar un contador, un solo número\n\nal hacerle click al número, el aumenta por uno\n\ndebe implementarse usando redux\n\n Link al github del proyecto:\n\n"




class MyComponent extends React.Component { 
    render(){
        return (
                    <SwipeableViews>
                        <Project description={Information} title="Portafolio" link=""></Project>
                        <Project description={description1} title="Titulo: Dibujo con css" link="https://codepen.io/wiichog/pen/weZqVo" linktitle="Visitalo Aqui!"></Project>
                        <Project description={description2} title="Titulo: Memoria" link="https://codepen.io/wiichog/pen/yoyRgd" linktitle="Visitalo Aqui!"></Project>
                        <Project description={description3} title="Titulo: chat" link="https://github.com/wiichog/web/tree/master/CHAT" linktitle="Visitalo Aqui!"></Project>
                        <Project description={description4} title="Titulo: Laberinto" link="https://github.com/wiichog/web/tree/master/react-hello-world/node_modules/.bin/src/client/app" linktitle="Visitalo Aqui!"></Project>
                        <Project description={description5} title="Titulo: Calculadora" link="https://github.com/wiichog/web/tree/master/calculadora" linktitle="Visitalo Aqui!"></Project>
                        <Project title="Titulo: Proyecto 1"></Project>
                        <Project description={description7} title="Titulo: Contador Redux" link="https://github.com/wiichog/web/tree/master/contador" linktitle="Visitalo Aqui!"></Project>
                  </SwipeableViews>
            )
    }}
  
class Project extends React.Component{
    render(){
        return (
            <div style={styles.wall}>
            <div className = "title">{this.props.title}</div>
            <div className="description">{this.props.description}<a href={this.props.link}>{this.props.linktitle}</a></div>
            </div>
            )
    }
}

let imgUrl = 'images/wall.jpg'
let styles = {
    wall:{
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        height : screen.availHeight+1070,
        width: screen.availWidth+1000,
    },
}


ReactDOM.render(
    <App />, 
    document.getElementById('app')
);