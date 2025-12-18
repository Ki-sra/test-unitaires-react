export const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Erreur lors du chargement');
  }
  return response.json();
};