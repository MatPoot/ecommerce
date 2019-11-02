import React from 'react';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link to="/" className="logo-container">
<Logo className='Logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contact</Link>
        </div>
    </div>
)

export default Header;