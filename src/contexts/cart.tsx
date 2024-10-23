import { createContext, type ReactNode, useReducer } from 'react';
import { type ProductType, type CartProductType, CartStateType } from '../types';
import { CART_ACTIONS, cartInitialState, cartReducer } from '../reducers/cart';

interface ICartContext {
  cart: CartStateType,
  addToCart: (product: ProductType) => void,
  removeFromCart: (productId: CartProductType['id'], removeAll?: boolean) => void,
  clearCart: () => void,
  getCartLength: () => number,
  getProductFromCart: (productId: CartProductType['id']) => CartProductType | null
  isProductInCart: (productId: CartProductType['id']) => boolean
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<ICartContext>({
  cart: { total: 0, products: []},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartLength: () => {return 0},
  getProductFromCart: () => {return null},
  isProductInCart: () => false
});

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product: ProductType) => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product });
  }

  const removeFromCart = (productId: CartProductType['id'], removeAll = false) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { productId, removeAll} });
  }

  const clearCart = () => dispatch({type: CART_ACTIONS.CLEAR_CART})

  const getCartLength = () => {
    const { products } = state

    if (products.length > 0) {
      const sum = products.map(item => (item.quantity)).reduce((acc, curr) => acc + curr)
      return sum
    }

    return 0
  }

  const getProductFromCart = (productId: CartProductType['id']): CartProductType | null => {
    const { products } = state

    const productFromCart = products.find(item => item.id === productId)

    if (!productFromCart) return null

    return productFromCart
  }

  const isProductInCart = (productId: CartProductType['id']) => {
    const { products } = state;

    return products.some(item => item.id === productId);
  }

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      getCartLength,
      getProductFromCart,
      isProductInCart
    }}>
      { children }
    </CartContext.Provider >
  )
}