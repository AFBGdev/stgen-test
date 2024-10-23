import { getFromLocalStorage } from '../lib/utils';
import { type CartStateType, type CartActionType, CartProductType } from '../types';

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
} as const

export const cartInitialState: CartStateType = getFromLocalStorage('cart') ?? {
  total: 0,
  products: []
}


const updateCartLocalStorage = (cart: CartStateType) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export function cartReducer(state: CartStateType, action: CartActionType): CartStateType {
  const { type } = action
  const { products } = state

  switch (type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const product = action.payload
      const productInCart = products.findIndex(item => item.id === product.id);

      let newCartProductsState: CartProductType[]

      if (productInCart >= 0) {
        newCartProductsState = structuredClone(products)
        newCartProductsState[productInCart].quantity += 1

      } else {
        newCartProductsState = [
          ...products,
          {
            ...product,
            quantity: 1,
            price: product.price + (product.price / 10)
          }
        ]
      }

      const total = newCartProductsState.map(item => (item.quantity * item.price)).reduce((acc, curr) => acc + curr)

      const newCart = {
        ...state,
        total,
        products: newCartProductsState
      }

      updateCartLocalStorage(newCart)
      return newCart
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { productId, removeAll } = action.payload
      const { products } = state

      let newCartProductsState: CartProductType[]

      const productInCart = products.findIndex(item => item.id === productId);
      newCartProductsState = structuredClone(products)
      if (!removeAll && newCartProductsState[productInCart].quantity > 1) {
        newCartProductsState[productInCart].quantity -= 1

      } else {
        newCartProductsState = products.filter(item => item.id !== productId)
      }

      const total = newCartProductsState.length > 0 ? newCartProductsState.map(item => (item.quantity * item.price)).reduce((acc, curr) => acc + curr) : 0

      const newCart = {
        ...state,
        total,
        products: newCartProductsState
      }

      updateCartLocalStorage(newCart)
      return newCart
    }

    case CART_ACTIONS.CLEAR_CART: {
      const newCart = { total: 0, products: []}
      updateCartLocalStorage(newCart)
      return newCart
    }

    default:
      return state
  }
}
