// her har vi følgende render-funktions

//  #region renderProductCard(product)
export function renderProductCard (product){
    //price, description, thumbnail & title skal renderes
    let title =document.createElement('h3')
    let price = document.createElement('p')
    let thumbnail = document.createElement('img')
    let description = document.createElement('p')
    let card = document.createElement('div')
    let buyButton =document.createElement('button')

    card.classList.add('card')

title.innerText = product.title
price.innerText = product.price + 'Kr'
thumbnail.src = product.thumbnail
description.innerText = product.description
buyButton.innerHTML = product.buyButton

card.appendChild(title)
card.appendChild(thumbnail)
card.appendChild(description)
card.appendChild(price)
card.appendChild(buyButton) 

let container = document.getElementById("mainContainer")

container.appendChild(card)
}
// #endregion

// #region renderCategories(categories)
// her viser vi categories

// #endregion

// #region renderProductDetails(product)

// #endregion

// #region renderCart(cartItems)

// #endregion


