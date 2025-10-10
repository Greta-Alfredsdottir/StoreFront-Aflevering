// her har vi følgende render-funktions

import { getProducts } from "./api.js"

//  #region renderProductCard(product)
export function renderProductCard (product){
    //price, description, thumbnail & title skal renderes
    let title = document.createElement('h3')
    let price = document.createElement('p')
    let thumbnail = document.createElement('img')
    let description = document.createElement('p')
    let card = document.createElement('div')
    let buyButton = document.createElement('button')

    card.classList.add('card')

title.innerText = product.title
price.innerText = product.price + 'Kr'
thumbnail.src = product.thumbnail
description.innerText = product.description
buyButton.innerHTML = "Køb nu"

card.appendChild(title)
card.appendChild(thumbnail)
card.appendChild(description)
card.appendChild(price)
card.appendChild(buyButton) 

let container = document.getElementById("mainContainer")

container.appendChild(card)
}
export async function renderRandomProducts(){
    // hent data
    //vælg 3 tilfældige items fra data-arrayet
    let data = await getProducts()
    console.log(data)
    
    let value1 = Math.floor (Math.random() * 30)
    let value2 = Math.floor (Math.random() * 30)
    let value3 = Math.floor (Math.random() * 30)

    console.log(data.products[value1],data.products[value2],data.products[value3])

    let randomArray = (data.products[value1],data.products[value2],data.products[value3])
    
    

    
}
// #endregion

// #region renderCategories(categories)
// her viser vi categories
export function renderCategoriesCard (categories){
    let categorieTitle = document.createElement('h3')
    categorieTitle.innerText = categories.name
    let container = document.getElementById("mainNavigation")
    container.appendChild(categorieTitle)
}
// #endregion

// #region renderProductDetails(product)
// export function renderProductDetails (product)
//    let productDetails = document.createElement('h3')
//    productDetails.innerText = product.details
//    let container = document.getElementById("mainContainer")
// #endregion

//#region renderAlProducts
export function renderAlProducts (product){

    let productSearch = document.createElement('h4')
    productSearch.innerText = product.searchWord
    let container = document.getElementById("searchBar")
    container.appendChild(productSearch)
}
//#endregion


// #region renderCart(cartItems)

// #endregion


