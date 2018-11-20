
let userCollection = ['Valentin', 'Manon', 'Andrieu','Gabriel', 'Emilie'];
console.log(userCollection);
//Saluer tout le monde
console.log(`Salut ${userCollection[0]}`);
console.log(userCollection.length);
//Créer une boucle sur une collection de données

for(let i=0; i<userCollection.length; i++){
    //console.log(`Hello ${userCollection[i]}`);
};
let i =0;
while(i<userCollection.length){
   // console.log(`wesh ${userCollection[i]}`);
    i++;
};
//For of : nouveauté ES6
for(let item of userCollection){
    //console.log(`Hello ${item}`);
};
userCollection.forEach(item => {
    //console.log(`yo ${item}`);
});
//Déclarer un objet user contenant firstname et lastname
let user = {
    firstName: 'Valentin',
    lastName: 'Gruyer'
};
//faire une boucle for in sur des propriété de l'objet
for(let property in user){
    console.log(property);
    console.log(user[property]);
}