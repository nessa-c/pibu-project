import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FiltersTest3({ onFilter }) {
    const [productCategories, setProductCategories] = useState({});

    useEffect(() => {
        fetchProductCategories();
    }, []);

    const fetchProductCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8000/sorting/product-categories');
            const categories = response.data;
            const groupedCategories = {};

            categories.forEach(category => {
                if (!groupedCategories[category.category]) {
                    groupedCategories[category.category] = [];
                }
                groupedCategories[category.category].push(category.type);
            });

            setProductCategories(groupedCategories);
        } catch (error) {
            console.error('Error fetching product categories:', error);
        }
    };

    const handleFilterChange = (category, type, isChecked) => {
        // Handle filter change logic
    };

    return (
        <div className="mt-5 rounded-2xl">
            <div className="hidden xl:block border px-5 rounded-2xl">
                {Object.keys(productCategories).map(category => (
                    <details key={category} className="m-2 border-b border-gray-200">
                        <summary className="flex justify-between items-center cursor-pointer py-5">
                            <span className="text-secondary text-md">{category}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="-mt-3 mb-2">
                            {productCategories[category].map(type => (
                                <div key={type}>
                                    <input
                                        type="checkbox"
                                        id={`${category}-${type}`}
                                        // Handle checked state based on filter logic
                                        className="mr-3 rounded-sm"
                                    />
                                    <label htmlFor={`${category}-${type}`} style={{ width: '90%' }}>{type}</label>
                                </div>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}

export default FiltersTest3;
