import { IoTrashSharp } from 'react-icons/io5';
import { type CartProductType } from '../../types';
import RemoveAndAddBox from './remove-and-add-box';
import useCart from '../../hooks/useCart';
import { toCurrencyString } from '../../lib/utils';

interface CartProductItemProps {
  cartProduct: CartProductType
}

function CartProductItem({cartProduct}: CartProductItemProps) {
  const { removeFromCart } = useCart()
  const totalPrice = toCurrencyString(cartProduct.quantity * cartProduct.price)

  return (
    <li className='w-full grid grid-cols-[auto,1fr] gap-3 bg-white border border-tertiary items-center rounded-md p-4'>
      <div className='w-28 h-full object-contain flex justify-center items-center rounded-md overflow-hidden'>
        <img className='aspect-square w-full h-full object-cover' src={ cartProduct.urlImage } alt={`${cartProduct.regName} image`} />
      </div>

      <div className='flex flex-col gap-y-8 md:gap-y-0 md:flex-row md:gap-4 md:justify-between'>
        <div className='flex flex-col'>
          <h3 className='font-bold text-lg text-gray-700'>{ cartProduct.regName }</h3>

          <p className='text-gray-400 text-sm'>Tatoo { cartProduct.tatoo }</p>

          <p className='text-gray-400 text-sm'>{ cartProduct.naavCode }</p>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row-reverse md:justify-evenly'>
          <p className='font-bold text-gray-700'>{ totalPrice }</p>

          <RemoveAndAddBox product={cartProduct} />
        </div>

        <div className='hidden md:flex md:justify-center md:items-center'>
          <button
            className='rounded-full p-2 hover:bg-slate-300 text-red-600'
            onClick={() => removeFromCart(cartProduct.id, true)}
          >
            <IoTrashSharp size={30} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartProductItem