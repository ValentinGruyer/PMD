console.log('toto');
console.error('tu merdes là');

var userName = "Valentin Gruyer";
console.log(userName); //Version ES5

//Version ES6
let firstName = 'Chuck'; //Version ES6
const birthdate = 1979; //Nouveauté ES6

//Types de variables 
let isBoolean =  true; 
let isString = "Je suis une string";
let isInterger = 1394;
let isFloat = 123.456;
let isArray = ['Hello', 123, false, isString, ['world', isInterger]];
console.log(isBoolean,isString,isInterger,isFloat,isArray);

//Intégrer une balise HTML dans une varaible

let myTitle = document.querySelector('h1');
console.log(myTitle);

//Templating de string
let firstCar = "Ford Fiesta";
let secondCar = "BMW";
//Concat V.ES5
let message = "j'ai deux voitures, une "+firstCar + "et une " + secondCar;
//Concat V.ES6
let newMessage =  `J'ai deux voitures, une ${firstCar} et une ${secondCar}`;
console.log(message, newMessage);

//Déclarer un objet
let myObject = {
    firstName: 'Valentin',
    lastName: 'Gruyer',
    birthDate: 1996 ,
    sayHello: ()=>{
        console.log(`hello my name is ${myObject.firstName}`);
    }
};
//afficher l'objet dans la console
console.log(myObject);
//Executer la fonction de l'objet
myObject.sayHello();

/* alt + maj + a */

