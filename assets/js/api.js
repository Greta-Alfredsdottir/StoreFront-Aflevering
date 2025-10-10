// her har vi følgende funktioner, til at hente data

//   getProducts()  
export async function getProducts(){ 
    return fetch('https://dummyjson.com/products?limit=3')
    .then(res => res.json()) //response = res
    } // alt ind i funktion, skal være i curlybrackets {}


//   getCategories()
export async function getCategories() {
    return fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
} 
//   getProductById(id)

//   searchProducts(query)  
export async function getSearch(query) {
    let url = `https://dummyjson.com/products/search?q=${query}`
    let res =await fetch(url)
    let data = await res.json(); 
        return data
  
}

