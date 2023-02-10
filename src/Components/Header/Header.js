import React from 'react';
import '../Header/Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2 className='text-xl'>Shop-At-Home</h2>
            <div>
                <a href="/">Shop</a>
                <a href="/">Orders</a>

                <a href="/">About</a>
            </div>
        </nav>
    );
};

export default Header;