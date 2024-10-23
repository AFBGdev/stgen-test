import { useContext } from 'react';
import { CartContext } from '../contexts/cart';

export default function useCart() {
  const cartContext = useContext(CartContext)

  if (cartContext === undefined) {
    throw new Error('useCart must be used within a CartContextProvider')
  }

  return cartContext
}