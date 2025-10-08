// her har vi følgende funktioner

//   getProducts()  
//   getCategories()
//   getProductById(id)
//   searchProducts(query)

export function getProducts(){ fetch('https://dummyjson.com/products')
    .then(res => res.json()) //response
    .then(console.log);} // alt ind i funktion, skal være i curlybrackets

