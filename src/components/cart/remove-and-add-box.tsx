import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';
import { type CartProductType, type ProductType } from '../../types';
import useCart from '../../hooks/useCart';

interface RemoveAndAddBoxProps {
  product: ProductType | CartProductType
}

function RemoveAndAddBox({ product }: RemoveAndAddBoxProps) {
  const { addToCart, removeFromCart, getProductFromCart } = useCart()

  return (
    <div className='flex gap-4 bg-white border-[1px] border-primary rounded-lg px-2 py-2'>
      <button
        className='text-primary text-center'
        onClick={() => removeFromCart(product.id)}
      >
        <IoRemoveSharp size={25} />
      </button>

      <p className='font-bold text-primary'>{getProductFromCart(product.id)?.quantity}</p>

      <button
        className='text-primary text-center'
        onClick={() => addToCart(product)}
      >
        <IoAddSharp size={25} />
      </button>
    </div>
  )
}

export default RemoveAndAddBox