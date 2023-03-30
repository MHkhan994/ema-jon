import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Products comming soon</h2>
            </div>
            <div className="cart-container">
                <h3>order summary</h3>
            </div>
        </div>
    );
};

export default Shop;