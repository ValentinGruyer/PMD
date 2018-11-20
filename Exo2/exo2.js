//Création d'une fonction
//En ES55

function sayHello(nameParam){
    console.log(`Hello ${nameParam}`);
};
let sayCiao = function(nameParam){
    console.log(`Ciao ${nameParam}`)
}
sayHello('valentin');
sayHello('Chuck');
sayCiao('Norris');

// Fonction en ES6
const sayHola = (nameParam) =>{
    console.log(`Hola ${nameParam}`)
}
// ou 
const sayHolaSecound = (nameParam) => console.log(`Hola ${nameParam}`);
sayHola('Steve');