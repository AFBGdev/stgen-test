import { useEffect, useState } from 'react';
import { getProducts } from '../services/products-services';
import { ProductType } from '../types';

function useProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    getProducts()
      .then(products => {
        setProducts(products)
      })
  }, [])

  return {
    products
  }
}

export default useProducts