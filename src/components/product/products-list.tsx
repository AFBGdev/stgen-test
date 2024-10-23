import { ProductType } from '../../types';
import ProductsListItem from './products-list-item';

interface ProductsListProps {
  products: ProductType[]
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className='w-full grid grid-cols-1 gap-4 md:grid-cols-4'>
      {products.map(product => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ProductsList