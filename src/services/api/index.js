export async function getCategories() {
  const answer = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    const data = await answer.json()
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
 try {
  const answer = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  const data = await answer.json()
  return data;
 } catch (error) {
   return console.log(error);
 }

}
