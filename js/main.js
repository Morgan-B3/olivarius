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