import { Link, useNavigate } from 'react-router-dom';
import { IoCartSharp, IoMenu } from 'react-icons/io5';
import useCart from '../hooks/useCart';
import { toCurrencyString } from '../lib/utils';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const { cart, getCartLength } = useCart()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState)
  }

  const handleClick = () => {
    navigate('/transactions');
  }


  return (
    <header className='w-full max-h-20 flex justify-between items-center py-3 px-3 md:px-11 sticky top-0 bg-white border-b-2 border-gray-200'>
      <button
        className='flex justify-center items-center md:hidden border border-secondary p-2 rounded-md text-secondary'
        onClick={toggleMenu}
      >
        <IoMenu size={25}/>
      </button>

      <img className='w-36' src='/logo_stgen_200.webp' />

      <div className={'bg-slate-100 md:bg-white gap-8 absolute top-full left-0 w-10/12 shadow-md md:relative md:top-0 md:left-auto md:flex md:h-full md:shadow-none md:justify-center ' + (isOpen ? 'flex' : 'hidden')}>
        <nav className='flex gap-4 flex-col h-[100vh] p-3 md:flex-row md:h-full [&>*]w-full [&>*]:font-medium [&>*]:text-secondary [&>*]:rounded-lg [&>*]:px-2 [&>*]:py-1 [&>*:hover]:bg-secondary [&>*:hover]:text-center [&>*:hover]:text-white'>
          <Link to='/' onClick={toggleMenu}>Home</Link>

          <Link to='/transactions' onClick={toggleMenu}>Cart</Link>
        </nav>
      </div>

      <div className='realative'>
        <button
          className='flex gap-1 items-center'
          onClick={handleClick}
        >
          <div className='hidden md:flex md:flex-col text-primary'>
            <p className='font-semibold text-sm'>Total</p>
            <p className='text-xs'>{ toCurrencyString(cart.total) }</p>
          </div>

          <div className='relative text-primary'>
            <IoCartSharp size={45} />

            <p className='absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full py-1 px-2'>
              {getCartLength()}
            </p>
          </div>
        </button>
      </div>

    </header>
  )
}

export default Header