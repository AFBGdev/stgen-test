import { type ReactNode } from 'react';
import { CartProvider } from '../contexts/cart';

interface AppProvidersProps {
  children: ReactNode
}

function AppProviders({ children }: AppProvidersProps) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}

export default AppProviders