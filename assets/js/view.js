// her har vi følgende render-funktions


//    renderProductCard(product)
//    renderProductDetails(product)
//    renderCart(cartItems)
//    renderCategories(categories)

export function renderProductCard (product){
    //price, description, thumbnail & title skal renderes
    let title =document.createElement('h3')
    let price = document.createElement('p')
    let thumbnail = document.createElement('img')
    let description = document.createElement('p')
    let card = document.createElement('div')

    card.classList.add('card')


title.innerText = product.title
price.innertext = product.title + 'Dkk'
thumbnail.src = product.thumbnail
description.innerText = product.description

card.appendChild(title)
card.appendChild(thumbnail)
card.appendChild(description)
card.appendChild(price)

let container = document.getElementById("mainContainer")

container.appendChild(card)
}
