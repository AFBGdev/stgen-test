import CartProductItem from '../components/cart/cart-product-item';
import useCart from '../hooks/useCart';
import { toCurrencyString } from '../lib/utils';

export default function TransactionsPage() {
  const { cart } = useCart()
  const { products } = cart

  return (
    <section className='w-full '>
      <h3 className='font-bold text-2xl text-gray-600 mb-8'>Shopping Cart</h3>

      <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-[1fr,0.5fr] md:gap-9 '>
        <div className='flex flex-col'>
          <ul className='flex flex-col gap-5'>
            {products.length === 0 && (
              <div className='w-full bg-white border border-tertiary shadow-md rounded-md p-7'>
                <p className='w-full font-bold text-gray-700 text-2lg text-center'>No products in Cart</p>
              </div>
            )}

            {products.length > 0 && products.map(cartProduct => (
              <CartProductItem key={cartProduct.id} cartProduct={cartProduct} />
            ))}
          </ul>
        </div>

        <div className='flex flex-col'>
          <p className='w-full text-center flex justify-between py-3'>
            <span className='font-medium text-gray-500'>Total</span>
            <span className='font-bold text-gray-800'>{ toCurrencyString(cart.total) }</span>
          </p>

          <div className='w-full border-t-[1px] border-tertiary px-5 py-4'>
            <button className='w-full py-3 px-6 bg-primary rounded-lg text-white font-semibold hover:opacity-80 disabled:bg-tertiary' disabled={products.length === 0}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}