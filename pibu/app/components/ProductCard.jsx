import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

function ProductCard({ product }) {
  const [brandName, setBrandName] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      if (product.id) {
        try {
          const productResponse = await axios.get(`http://localhost:8000/products/${product.id}/`);
          const brandResponse = await axios.get(`http://localhost:8000/sorting/brands/${productResponse.data.brandid}/`);
          setBrandName(brandResponse.data.name);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
    }

    fetchProduct();
  }, [product.id]);

  return (
    <div className="mt-5 grid grid-cols-2 gap-4 bg-base-100 hover:shadow-lg rounded-2xl border-solid border-2 border-primary max-h-64">
      <figure><img className="p-2 max-h-64 max-w-1/2" src={product.image} alt={product.name} /></figure>
      <div className="card-body max-w-96">
        <h2 className="card-title">{brandName} {product.name}</h2>
        <p>{product.ProductDescription}</p>
        {/* <ul>
          {product.ProductFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul> */}
        <p>{product.RetailPrice}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product.id}`} className="btn btn-secondary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
