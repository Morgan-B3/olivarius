import Client from "./Client.js";

let clients = [];

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
})

// Formulaire 2 : 

let form2 = document.querySelector("#form2");
form2.addEventListener("submit", (e) => {
    let prenom = document.querySelector("#prenom").value;
    let nom = document.querySelector("#nom").value;
    
    let client = client.filter(prenom, nom);

    // if (client) {
    //     console.log(client);
    // } else {
    //     console.log("Aucun résultat pour votre recherche");
    // }

})