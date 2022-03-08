export async function getCategories() {
 
  const answer = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return answer;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  
  const answer = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
  return answer;
}
