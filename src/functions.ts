export function first<Type>(products: Type[]): Type {
  return products[0];
}

export function updateItem<Type>(products: Type[], itemId: number, updatedData: Type): Type[] {
  if (products[itemId] === undefined) {
    return products;
  }
  const updatedProducts = [...products];
  updatedProducts[itemId] = updatedData;

  return updatedProducts;
}