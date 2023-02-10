import React, { useEffect, useState } from 'react';
import Cart from './Cart';

import Product from './Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [page, setPage] = useState(0);
    // const [size, setSize] = useState(5);

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    let count = products.length;

    // const pages = Math.ceil(count / size);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

    let pages = [];
    for (let i = 1; i <= Math.ceil(count / postsPerPage); i++) {
        pages.push(i)
    }

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    currentPosts.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>
                    )
                }
            </div>

            {/* ***********cart section */}

            <div >
                <Cart cart={cart}></Cart>
            </div>

            {/* ***********pagination*/}

            <div className='mx-auto mb-20'>
                {
                    pages.map((page, index) =>
                        <button
                            key={index}
                            className={currentPage === page ? 'btn btn-secondary mx-2' : 'mx-2 btn btn-secondary btn-outline'}
                            onClick={() => setCurrentPage(page)}>{page}
                        </button>)
                }
            </div>
        </div>
    );
};

export default Shop;