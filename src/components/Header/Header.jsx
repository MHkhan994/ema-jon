import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='header'>
                <img src={logo} alt="" />
                <div className='nav'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/invertory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;