'use client';
import {React,useState} from 'react';
import Link from 'next/link';

const menuData = {
    "Cleanser": [
        "Gel", "Cream", "Oil", "Foam", "Clay", "Powder", "Micellar", "Bar"
    ],
    "Toner": [
        "Liquid", "Toner Pad"
    ],
    "Exfoliant": [
        "Physical", "AHA", "BHA", "PHA"
    ],
    "Serum": [
        "Hydrating", "Exfoliating", "Brightening", "Anti-Aging", "Acne-Fighting"
    ],
    "Moisturizer": [
        "Gel", "Cream", "Lotion"
    ],
    "Sunscreen": [
        "Gel", "Cream", "Spray", "Stick", "Powder"
    ]
}

const SubMenu = () => {
  return Object.entries(menuData).map(([category, products]) => (
    <li key={category} className="dropdown dropdown-hover">
      {category && (
        <Link href={`/${category}`} className="btn">
          {category}
        </Link>
      )}
      <ul className="dropdown-content">
        {products.map(product => (
          <li key={product}>
            {product && (
              <Link href={`/${category}/${product}`}>
                {product}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </li>
  ));
};

export default SubMenu;