import ProductsList from '../components/product/products-list';
import useProducts from '../hooks/useProducts';

export default function HomePage() {
  const { products } = useProducts();

  return (
    <ProductsList products={products} />
  )
}