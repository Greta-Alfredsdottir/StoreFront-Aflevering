// her har vi følgende funktioner, til at hente data

//   getProducts()  
//   getCategories()
//   getProductById(id)
//   searchProducts(query)

export async function getProducts(){ 
    return fetch('https://dummyjson.com/products')
    .then(res => res.json()) //response = res
    } // alt ind i funktion, skal være i curlybrackets {}

