const URL_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
const URL_QUERY = 'https://api.mercadolibre.com/sites/MLB/search?category=';
export async function getCategories() {
  try {
    const response = await fetch(URL_CATEGORIES);
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const response = await fetch(`${URL_QUERY}${categoryId}&q=${query}`);
    const product = await response.json();
    return product;
  } catch (err) {
    console.error(err);
  }
}
