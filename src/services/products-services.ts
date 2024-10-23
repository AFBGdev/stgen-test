import { apiQuery } from '../lib/api';

const PRODUCTS_ENDPOINT = '/products'

export async function getProducts() {
  const products = await apiQuery(PRODUCTS_ENDPOINT)
  return products
}