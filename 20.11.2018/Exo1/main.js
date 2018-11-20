//Déclaration des variables
let myNav = document.querySelectorAll('nav a');

console.log(myNav);
//Activer la navigation
    //Faire une boucle sur myNav (collection de lien)
for(let item of myNav){
    //item => lien de ma nav
    console.log(item);
    //capter le clic sur le lien
    item.addEventListener("click", (event) =>{
       //bloguer le comportement naturel de la balise
       event.preventDefault();
        console.log(item.getAttribute('link-data'));
        //Récupérer la valeur de l'attribut link-data
        const pageName = item.getAttribute('link-data')
        //Ajouter le contenu dans le DOM
        fetchHtmlData(pageName)
        console.log(pageName)
    });
}
//Création d'une fonction fetch
const fetchHtmlData  = (page ='contacts') => {
        //Requête asynchrone sur un fichier HTML
    fetch(`content/${page}.html`)
    //1er callback : analyse et traitement du fetch
    .then(rawResponse => {
        console.log(rawResponse)
        //Renvoyer la réponse au format texte
        return rawResponse.text()
    })
    //2eme callback : manipuler les données
    .then(textResponse => {
        //Ajouter le contenu dans le DOM
        console.log(textResponse)
        document.querySelector('main').innerHTML = textResponse;
        //Envoyer le nom de la page dans le dernier then
        return page
    })
    .then( (page) => {
        console.log(page)
        //Vérifier le nom de la page active
        if(page === 'contacts') submitForm();
    })
    //Capterles erreurs
    .catch(error =>{
        console.error(error)
    })
}

const submitForm = () => {
    let msgSubject = document.querySelector('[placeholder="sujet"]');
    let msgEmail = document.querySelector('[placeholder="Email"]');
    let msgMessage = document.querySelector('[placeholder="Votre message"]');
    let messageList = document.querySelector('form + ul');
    let myForm = document.querySelector('form');
        //Capter le submit du fomulaire
        myForm.addEventListener('submit', (event) =>{
            let formError = 0;
            event.preventDefault();

            //Validation du formulaire
            let msgSubject = document.querySelector('[placeholder="sujet"]');
            let msgEmail = document.querySelector('[placeholder="Email"]');
            let msgMessage = document.querySelector('[placeholder="Votre message"]');
            //Le sujet est valise d'ils contient au minimum 2 caractères
            if(msgSubject.value.length <= 2){
                formError++;
                msgSubject.classList.add('formError')
            }
            if(msgEmail.value.length <= 5){
                formError++;
                msgEmail.classList.add('formError')
            }
            if(msgMessage.value.length <= 5){
                formError++;
                msgMessage.classList.add('formError')
            }
            if( formError === 0){
                console.log('Le formulaire est validé')
                //Afficher les données
                messageList.innerHTML += `
                    <li>
                        <h3>${msgSubject.value}<b> ${msgEmail.value}</b> 
                        <p>${msgMessage.value}</p></h3>
                    </li>
                `
                //Vider le formulaire
                msgEmail.value =''
                msgMessage.value =''
                msgSubject.value =''
            }
        })
    //Suprimer les messages d'erreur au focus
    msgSubject.addEventListener('focus', () =>{
        msgSubject.classList.remove('formError')
    })
    msgEmail.addEventListener('focus', () =>{
        msgEmail.classList.remove('formError')
    })
    msgMessage.addEventListener('focus', () =>{
        msgSubject.classList.remove('formError')
    })
}

//Charger le contenu de la page d'accueil
fetchHtmlData();