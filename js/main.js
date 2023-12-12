import Client from "./Client.js";

const clients =[];

// S'il y a des données en localstorage, clients[] prend leur valeur, sinon il devient juste un tableau vide
if (localStorage.length > 0){
    for(let client of JSON.parse(localStorage.getItem("clients"))){
        clients.push(new Client(client.firstname, client.lastname, client.night, client.room, client.breakfast));
    };
} 
console.table(clients);


// Formulaire 1 :
let form1 = document.querySelector("#form1");
form1.addEventListener("submit", (e) => {
    // Pour empecher le refraichissement automatique de la page
    e.preventDefault();

    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let night = document.querySelector("#night").value;
    let room = document.querySelector("#room").value;
    let breakfast = document.querySelector("input[name=breakfast]:checked").value;
    let client = new Client(firstname, lastname, night, room, breakfast);
    
    // On ajoute le client dans le tableau clients[]
    clients.push(client);
    console.table(clients);

    // On met à jour le localstorage avec les données de clients[]
    localStorage.setItem("clients", JSON.stringify(clients));
    console.table(JSON.parse(localStorage.getItem("clients")));

})


// Formulaire 2 : 

let form2 = document.querySelector("#form2");

// Pour ne pas dupliquer le message à chaque fois qu'on clique sur le bouton
let secure = false;

form2.addEventListener("submit", (e) => {
    e.preventDefault();

    // Supprime le message précédent s'il y en a un
    if (secure){
        document.body.removeChild(document.body.lastChild);
    }

    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    
    let clientList = clients.filter(function(item) {
        return item.firstname.includes(prenom);
    });    

    let pElement = document.createElement("p");
    pElement.classList = "facture";
    
    if (clientList.length > 0){
        for(let client of clientList) {
            //console.log(client);
            // console.log(prenom);
            // console.log(client.firstname);
            // console.log(nom);
            // console.log(client.lastname);
            if ((prenom == client.firstname) && (nom == client.lastname)) {
                pElement.textContent = "Facture du client" + " " + prenom + " " + nom + " : " + client.totalPrice() + "€.";
            } else {
                pElement.textContent = "Auncun résultat pour votre recherche";
            }
        };
    } else {
        pElement.textContent = "Client introuvable";
    }
        //pas de return car nous ne sommes pas dans une méthode

    document.body.appendChild(pElement);

    // A partir de maintenant, a chaque fois qu'on clique sur le bouton, ça supprime le message d'avant
    secure = true;
})


// Vider le localStorage
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () =>{
    localStorage.clear();
})

