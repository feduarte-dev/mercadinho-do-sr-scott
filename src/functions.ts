import { CartItem } from './types/CartItem';
import { Food } from './types/Food';
import { Drink } from './types/Drink';

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

export function buildCartItem(product: Food | Drink, quantity: number): CartItem {
  return {
    name: product.name,
    price: product.price,
    quantity,
  } as CartItem;
}
