// HER SAMLER VI ALLE FILES 

//    Entry point for appen, initapp
//    Initialiserer appen og loader data
import {getSearch} from "./api.js";
import {getCategories, getProducts} from "./api.js"; //husk at set .js på 
import {renderCategoriesCard} from "./view.js";  // const productData = await getProducts()
import {renderProductCard} from "./view.js";
import {renderAlProducts} from "./view.js";


 function initapp(){
    getProducts().then((data)=> data.products.forEach(element => {
        renderProductCard(element)
    })) // dette er til at kalde funktionen, så den kører engang

    // her laver vi search bar
    let searchBar = document.getElementById('searchBar')
        searchBar.addEventListener('input',async(event) =>{
        let searchData = await getSearch(event.target.value)
        console.log(searchData);
        let container =document.getElementById("mainContainer")
        container.innerHTML = ""
               searchData.products.forEach(element =>{
            renderProductCard(element)
        })
        })

    // her laver vi categories
    getCategories().then((data)=> data.forEach(element => {
        
        
        renderCategoriesCard(element)
    }))
    }
    
initapp()