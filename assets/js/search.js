// her laver vi search bar
export async function getSearch(searchWord) {
     fetch('https://dummyjson.com/products/search?q=phone')
.then(res => res.json())
}