import { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { ProductType } from '../../types';
import RemoveAndAddBox from '../cart/remove-and-add-box';
import { toCurrencyString } from '../../lib/utils';

interface ProductsListItemProps {
  product: ProductType
}

function ProductsListItem({ product }: ProductsListItemProps) {
  const { cart, addToCart, isProductInCart } = useCart()
  const [productExistInCart, setProductExistInCart] = useState(false)

  useEffect(() => {
    const exist = isProductInCart(product.id)
    setProductExistInCart(exist)
  }, [cart])

  return (
    <li className='bg-white border border-gray-200 rounded-lg shadow overflow-hidden'>
      <img className='w-full aspect-video' src={ product.urlImage } />

      <main className='w-full p-4'>
        <div className='w-full flex justify-between items-center'>
          <h4 className='font-bold text-gray-800'>{ product.regName }</h4>

          <p className='font-bold text-xs text-gray-700'>{ toCurrencyString(product.price) }</p>
        </div>

        <div className='w-full flex gap-2 items-center'>
          <p className='text-sm text-gray-500'>{ product.tatoo }</p>

          <p className='text-sm text-gray-500'>-</p>

          <p className='text-sm text-gray-500'>{ product.born }</p>
        </div>
      </main>

      <footer className='w-full flex justify-between px-4 pb-4'>
        <button className='bg-white border border-primary py-2 px-5 rounded-lg font-medium text-primary hover:opacity-80'>
          View info
        </button>

        {!productExistInCart && (
          <button
            className='bg-primary border py-3 px-6 rounded-lg font-medium text-white hover:opacity-80'
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        )}

        {productExistInCart && (
          <RemoveAndAddBox product={product} />
        )}
      </footer>
    </li>
  )
}

export default ProductsListItem