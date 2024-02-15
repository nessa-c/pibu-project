import React from 'react';
import Link from 'next/link';

function ProductCard({ product }) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 bg-base-100 hover:shadow-lg rounded-2xl border-solid border-2 border-primary max-h-64">
      <figure><img className="p-2 max-h-64" src={product.image} alt={product.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.ProductDescription}</p>
        {/* <ul>
          {product.ProductFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul> */}
        <p>{product.RetailPrice}</p>
        <div className="card-actions justify-end">
        <Link href={`/products/[id]`} as={`/products/${product.id}`} className="btn btn-secondary">
          More Details
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;