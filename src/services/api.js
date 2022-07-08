export async function getCategories() {
  // Implemente aqui
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(URL);
  const data = await categories.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const categories = await fetch(URL);
  const data = await categories.json();
  return data;
}

export async function productID(productId) {
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  const categories = await fetch(URL);
  const data = await categories.json();
  return data;
}
