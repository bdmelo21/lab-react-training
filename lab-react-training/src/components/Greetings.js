import React from 'react'

function greetings (props) {
    let greeting="";
    switch (props.lang){
        case "de": 
        greeting="Hallo";
        break; 
        case "fr":
        greeting="Bonjour";
        break;
        case "es":
        greeting="Hola";
        break;
        case "en":
        greeting="Hello";
        break;
    }
    return (`${greeting} ${props.children}`);
}
export default greetings