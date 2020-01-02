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


let sec =60;
let min =60;
let hour =24;

let counter = setInterval(() => {
    ReactDOM.render(<Card segundos={sec} minutos={min} horas={hour}  />, document.querySelector("#root"));
    sec--;
    if (sec == 0){
        sec=60;
        min--;
    } else if(min == 0){
        min=60;
        hour--;
    } else if (hour==0){
        hour=24;
        clearInterval(counter);
    }

   
},10);






