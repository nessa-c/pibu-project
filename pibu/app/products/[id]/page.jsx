'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Corrected import
import axios from 'axios';
import ProductDetails from '../../components/ProductDetails';
import NavBar from '../../components/NavBar';

export default function ProductPage() {
  const pathname = usePathname();
  const id = pathname.split('/').pop(); // Extract id from pathname

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:8000/products/${id}/`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <main>
      <header className='sticky top-5 z-50 m-5'>
        <NavBar />
      </header>
      <div className="mx-20">
        <ProductDetails product={product} />
      </div>
    </main>
  );
}