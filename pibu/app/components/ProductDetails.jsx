import React from 'react';
import Link from 'next/link';

function ProductDetails({ product }) {
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96">
        <p className="text-red-500 text-center">No product found. Please try again or go back to the products page.</p>
        <div className="mt-8">
          <Link href="/products" className="btn btn-secondary">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-5 bg-base-100 p-8 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img className="max-h-80 rounded-lg" src={product.image} alt={product.name} />
        </div>
        <div>
          <p className="text-gray-700">Type: {product.type}</p>
          <p className="text-gray-700">Suitable Skin Types: {product.skintypes}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Link href="/products" className="btn btn-secondary">Back to Products</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
