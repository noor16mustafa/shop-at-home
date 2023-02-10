import React from 'react';

const Product = (props) => {
    const { category, description, price, title, thumbnail } = props.product;

    return (
        <div className="hero mx-auto" style={{ width: "700px", height: "300px" }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={thumbnail} className="rounded-lg shadow-2xl" style={{ width: "200px", height: "200px" }} alt='' />
                <div style={{ width: "500px" }}>
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="py-1 font-semibold text-pink-700">Category: {category}</p>
                    <p className="py-2">{description}</p>
                    <p className="py-1 font-semibold">Price: ${price}</p>
                    <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-outline btn-secondary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;