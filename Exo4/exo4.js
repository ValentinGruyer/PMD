//Déclaration des variables
let userCollection = [];
let myButton = document.querySelector('button:nth-of-type(1)');
let ButtonSalut = document.querySelector('button:nth-of-type(2)');
let currentYear = 2018; 
//Définit le modèle objet (constructor)
function User(paramFirstName, paramLastName, paramBirthDate){
    this.firstName= paramFirstName;
    this.lastName = paramLastName;
    this.birthDate = paramBirthDate;
};
//Ajouter une fonction au constructeur
User.prototype.sayHello = function(){
    console.log(`Salut je suis ${this.firstName} ${this.lastName}`);
};

//Ajouter 3 user dans la collection
userCollection.push(new User('John', 'Bibiche',2000 ));
userCollection.push(new User('John', 'McKane',2003 ));
userCollection.push(new User('John', 'Cena',2007 ));
userCollection.push(new User('John', 'michmich',2002 ));



//Ajouter un item dans un tableau
//userCollection.push('Valentin');
//console.log(userCollection);
//Captter le click sur le bouton
myButton.addEventListener('click', function(){
    
    //Demander le prénom de l'utilisateur
    let askFirtName = prompt('Votre prénom');
    let askLastName = prompt('Votre nom');
    let askBirthDate = prompt("entrez votre date de naissance")
    //Ajouter un objet dans le tableau
    userCollection.push(new User(askFirtName, askLastName, parseInt(askBirthDate)));
    console.log(userCollection);
});
//Ajouter un bouton 
//Capter le click 
//AU click faire une boucle pour saluer les utilisateurs



ButtonSalut.addEventListener('click', () => {
    for(let i = 0; i <userCollection.length; i++){
        console.log(`Salut ! ${userCollection[i].firstName} ${userCollection[i].lastName}`);
        userCollection[i].sayHello();
        //savoir si l'utilisateur est majeur ou pas
        let userAge = currentYear - userCollection[i].birthDate;
        console.log(userAge);
        if(userAge >= 18){
            console.log(`est majeur : ${userAge} ans`);
        }else{
            console.log(' est mineur');
        }
    }
});