'use client';
import React, { useState, useEffect } from 'react';

const subCategories = [
    { name: 'Cleanser', href: '#' },
    { name: 'Toner', href: '#' },
    { name: 'Exfoliant', href: '#' },
    { name: 'Serum', href: '#' },
    { name: 'Moisturizer', href: '#' },
    { name: 'Sunscreen', href: '#' },
];

function FiltersTest2({ onFilter }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    const categoryMapping = {
        'cleanser': 'Cleanser',
        'toner': 'Toner',
        'exfoliant': 'Exfoliant',
        'serum': 'Serum',
        'moisturizer': 'Moisturizer',
        'sunscreen': 'Sunscreen',
        // Add other mappings here if needed
    };

    const handleFilterChange = (category, isChecked) => {
        const mappedCategory = categoryMapping[category] || category;
    
        if (isChecked) {
            setSelectedCategories(prevCategories => [...prevCategories, mappedCategory]);
        } else {
            setSelectedCategories(prevCategories => prevCategories.filter(item => item !== mappedCategory));
        }
    };

    useEffect(() => {
        onFilter(selectedCategories);
    }, [selectedCategories, onFilter]);

    const filters = [
        {
          id: 'product-types',
          name: 'Product Types',
          options: subCategories.map((subCategory) => ({
            value: subCategory.name.toLowerCase().replace(' ', '-'),
            label: subCategory.name,
            checked: false,
          })),
        },
        {
          id: 'skin-concern',
          name: 'Skin Concern',
          options: [
            { value: 'acne', label: 'Acne', checked: false },
            { value: 'sun-damage', label: 'Sun Damage', checked: false },
            { value: 'hyperpigmentation', label: 'Hyperpigmentation', checked: true },
            { value: 'dullness', label: 'Dullness', checked: false },
            { value: 'fine-lines', label: 'Fine Lines', checked: false },
            { value: 'intense-dryness', label: 'Intense Dryness', checked: false },
            { value: 'redness', label: 'Redness', checked: false },
            { value: 'texture', label: 'Texture', checked: false },
            { value: 'blackheads', label: 'Blackheads', checked: false },
          ],
        },
        {
          id: 'sustainability',
          name: 'Sustainability',
          options: [
            { value: 'vegan', label: 'Vegan', checked: false },
            { value: 'cruelty-free', label: 'Cruelty-Free', checked: false },
            { value: 'organic', label: 'Organic', checked: true },
            { value: 'recyclable-packaging', label: 'Recyclable Packaging', checked: false },
            { value: 'sustainable-ingredients', label: 'Sustainable Ingredients', checked: false },
          ],
        },
        {
          id: 'excluded-ingredients',
          name: 'Excluded Ingredients',
          options: [
            { value: 'fragrance', label: 'Fragrance', checked: false },
            { value: 'preservatives', label: 'Preservatives', checked: false },
            { value: 'nickel', label: 'Nickel', checked: false },
            { value: 'sulfates', label: 'Sulfates', checked: false },
            { value: 'parabens', label: 'Parabens', checked: false },
            { value: 'essential-oils', label: 'Essential Oils', checked: false },
            { value: 'propylene-glycol', label: 'Propylene Glycol', checked: false },
            { value: 'retinoids', label: 'Retinoids', checked: false },
            { value: 'lanolin', label: 'Lanolin (Wool)', checked: false },
            { value: 'latex', label: 'Latex', checked: false },
            { value: 'methylisothiazolinone', label: 'Methylisothiazolinone (MI)', checked: false },
            { value: 'cocamidopropyl-betaine', label: 'Cocamidopropyl Betaine', checked: false },
          ],
        },
    ];
    
    const filtersList = filters.map((filter, index) => (
        <details 
            key={filter.id}
            id={filter.id} 
            className={`m-2 ${index !== filters.length - 1 && 'border-b border-gray-200'}`}
        >
            <summary 
                className="flex justify-between items-center cursor-pointer py-5"
            >
                <span className='text-secondary text-md'>{filter.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div className="-mt-3 mb-2">
            {filter.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                    <input
                        type="checkbox"
                        id={`${filter.id}-${option.value}`}
                        checked={selectedCategories.includes(categoryMapping[option.value] || option.value)}
                        onChange={(e) => handleFilterChange(option.value, e.target.checked)}
                        className="mr-3 rounded-sm"
                    />
                    <label htmlFor={`${filter.id}-${option.value}`} style={{ width: '90%' }}>{option.label}</label>
                </div>
            ))}
            </div>
        </details>
    ));

    return (
        <div className="mt-5 rounded-2xl">
            <div className="xl:hidden">
                <details className="group dropdown dropdown-hover w-full">
                    <summary className="btn px-4 py-2 rounded-2xl w-full flex justify-between items-center">
                        <span>Filters</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-full">
                        {filtersList}
                    </div>
                </details>
            </div>
            <div className="hidden xl:block border px-5 rounded-2xl">
                {filtersList}
            </div>
        </div>
    );
}

export default FiltersTest2;