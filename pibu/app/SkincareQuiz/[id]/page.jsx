'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import NavBar from '../../components/NavBar';

export default function QuizRecommendations() {
  // State to store quiz results and product list
  const pathname = usePathname();
  const id = pathname.split('/').pop(); // Extract id from pathname

  const [quizResults, setQuizResults] = useState(null);
  const [productList, setProductList] = useState([]);

  // Fetch quiz results from API
  useEffect(() => {
    axios.get(`http://localhost:8000/skinquiz/${id}`)
      .then(response => {
        console.log('Quiz results:', response.data);
        setQuizResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching quiz results:', error);
      });
  }, []);

  // Fetch product list from API
  useEffect(() => {
    axios.get(`http://localhost:8000/products/list`)
      .then(response => {
        console.log('Product list:', response.data);
        setProductList(response.data);
      })
      .catch(error => {
        console.error('Error fetching product list:', error);
      });
  }, []);

  // Filter product list based on quiz results
  const filterProducts = () => {
    if (!quizResults || !quizResults.skin_type || quizResults.skin_type.length === 0) {
      return []; // Return an empty array if quiz results are not available or no skin types are selected
    }

    const lowerCaseSkinTypes = quizResults.skin_type.map(skinType => skinType.toLowerCase());

    // Filter products based on selected skin types
    let filteredProducts = productList.filter(product => {
      const productSkinTypes = product.skintypes.toLowerCase().split(',');
      return lowerCaseSkinTypes.some(selectedSkinType => productSkinTypes.includes(selectedSkinType));
    });

    if (quizResults.skincare_routine.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return product.category && quizResults.skincare_routine.some(selectedRoutine => product.category.includes(selectedRoutine));
      });
    }

    // Sort filtered products by category
    filteredProducts.sort((a, b) => a.category.localeCompare(b.category));

    return filteredProducts;
  };

  // Group filtered products by category
  const groupedProducts = filterProducts().reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  // Render the recommendation page
  return (
    <div>
      <NavBar />
      <h1 className="text-4xl font-extrabold text-secondary text-center mb-5">Quiz Results</h1>
      {quizResults && (
        <div className='text-center'>
          <p>Your skin type: {quizResults.skin_type.join(', ')}</p>
          <p>Your skincare routine: {quizResults.skincare_routine.join(', ')}</p>
        </div>
      )}
      <div className='my-10'>
      <h1 className="text-4xl font-extrabold text-secondary text-center">Recommended Products</h1>
        <div>
          {Object.entries(groupedProducts).map(([category, products]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-accent py-5 text-center px-5">{category}s</h3>
              <div className="flex overflow-x-auto">
                {products.map(product => (
                  <div key={product.id} className="flex-none w-1/3 mr-5">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
