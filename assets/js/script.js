// HER SAMLER VI ALLE FILES 

//    Entry point for appen, initapp
//    Initialiserer appen og loader data

import {getProducts} from "./api.js"; //husk at set .js på 
 function initapp(){
    getProducts().then((data)=> data.products.forEach(element => {
        
    })) // dette er til at kalde funktionen, så den kører engang

}

 
 initapp()