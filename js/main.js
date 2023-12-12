import Client from "./Client.js";

let clients = [];
//localStorage.setItem("clients", clients);

// Formulaire 1 :
let form1 = document.querySelector("#form1");
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    //let form1 = new FormData(document.querySelector("#form1"));
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let night = document.querySelector("#night").value;
    let room = document.querySelector("#room").value;
    let breakfast = document.querySelector("input[name=breakfast]:checked").value;
    let client = new Client(firstname, lastname, night, room, breakfast);
    clients.push(client);
    console.table(clients);
    //console.log(localStorage.getItem("clients"));
})

// Formulaire 2 : 

let form2 = document.querySelector("#form2");
form2.addEventListener("submit", (e) => {
    e.preventDefault();
    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    
    let clientList = clients.filter(function(item) {
        return item.firstname.includes(prenom);
    });    

    let pElement = document.createElement("p");
    pElement.classList = "facture";
    

    for(let client of clientList) {
        console.log(client);
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
        //pas de return car nous ne sommes pas dans une méthode

    document.body.appendChild(pElement);

})