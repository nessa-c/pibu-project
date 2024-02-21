'use client'
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';  // Import Axios
import SearchBar from '../components/SearchBar';
import FiltersTest2 from '../components/FiltersTest2';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';

function SearchProducts() {
    const [products, setProducts] = useState([]);  
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const isQueryInProduct = (product, query) => {
        return Object.values(product).some(value =>
            String(value).toLowerCase().includes(query.toLowerCase())
        );
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleFilter = useCallback((category, isChecked) => {
        if (isChecked) {
            setSelectedCategories(prevCategories => [...prevCategories, category]);
        } else {
            setSelectedCategories(prevCategories => prevCategories.filter(item => item !== category));
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => 
            (searchQuery ? isQueryInProduct(product, searchQuery) : true) &&
            (selectedCategories.length === 0 ? true : selectedCategories.includes(product.productCategory))
        );
        setFilteredProducts(filtered);
    }, [searchQuery, selectedCategories, products]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/products/list');  // Use Axios for HTTP request
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <header className='sticky top-5 z-50 m-5'>
                <NavBar />
            </header>
            <div className="mx-20">
                <SearchBar onSearch={handleSearch} />
                <div className="grid xl:grid-cols-5 gap-5">
                    <div className="">
                        <FiltersTest2 onFilter={handleFilter} className="w-1/4" />
                    </div>
                    <div className="xl:col-end-6 xl:col-span-4 grid xl:grid-cols-2 gap-5">
                        {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                        ) : (
                        <p style={{ marginTop: '20px' }}>There are no products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchProducts;
