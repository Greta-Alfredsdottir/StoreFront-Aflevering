// HER SAMLER VI ALLE FILES 

//    Entry point for appen, initapp
//    Initialiserer appen og loader data

import {getCategories, getProducts} from "./api.js"; //husk at set .js på 
import {renderCategoriesCard} from "./view.js";
// const productData = await getProducts()
import {renderProductCard} from "./view.js";
 function initapp(){
    getProducts().then((data)=> data.products.forEach(element => {
        renderProductCard(element)
    })) // dette er til at kalde funktionen, så den kører engang
    getCategories().then((data)=> data.categories.forEach(element => {
        renderCategoriesCard(element)
    }))
    }
    
initapp()