export type ProductType = {
  id: string,
  naavCode: string,
  regName: string,
  isMale: true,
  tatoo: string,
  born: string,
  urlImage: string,
  values: {
    mValue: 78,
    bValue: 193,
    cValue: 323
  },
  price: number
}

export type CartProductType = ProductType & { quantity }

export type CartStateType = {
  total: number,
  products: CartProductType[]
}

export type CartActionType =
  | { type: 'ADD_TO_CART', payload: product }
  | { type: 'REMOVE_FROM_CART', payload: { productId, removeAll } }
  | { type: 'CLEAR_CART'}