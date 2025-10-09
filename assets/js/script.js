// HER SAMLER VI ALLE FILES 

//    Entry point for appen, initapp
//    Initialiserer appen og loader data
import {getSearch} from "./search.js";
import {getCategories, getProducts} from "./api.js"; //husk at set .js på 
import {renderCategoriesCard} from "./view.js";
// const productData = await getProducts()
import {renderProductCard} from "./view.js";
 function initapp(){
    getProducts().then((data)=> data.products.forEach(element => {
        renderProductCard(element)
    })) // dette er til at kalde funktionen, så den kører engang

    // her laver vi search bar
    let searchBar = document.getElementById('searchBar')
        searchBar.addEventListener('change',async(event) =>{
        let searchData = await getSearch(event, EventTarget, value)
        renderAlProducts(searchData.products)
        })

    // her laver vi categories
    getCategories().then((data)=> data.forEach(element => {
        console.log(element);
        
        renderCategoriesCard(element)
    }))
    }
    
initapp()