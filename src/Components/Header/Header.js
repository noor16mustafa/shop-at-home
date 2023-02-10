import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2 className='text-lg'>Shop-at-Home</h2>
            <div>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>

                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;