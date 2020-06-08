import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/cards.js';


// Add css files
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS from Bootstrap
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'; // My own CSS

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';


let sec =59;
let min =59;
let hour =2;

let counter = setInterval(() => {
    ReactDOM.render(<Card segundos={sec} minutos={min} horas={hour}  />, document.querySelector("#root"));
    sec--;
    if (sec == 0){
        sec=59;
        min--;
    } else if(min == 0){
        min=59;
        hour--;
    } else if (hour==0){
        hour=23;
        min =59;
        sec =59;
        clearInterval(counter);
    }
},1000);






