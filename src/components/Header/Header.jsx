import React from 'react';
import clases from './Header.module.scss';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderActions from './HeaderActions/HeaderActions';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderFilters from './HeaderFilters/HeaderFilters';

const Header = () => {
    return (
        <header className={clases.header}>
            <div className={clases.header__wrapper}>
                <div className={clases.header__burger}>
                    <span></span>
                    <span></span>
                </div>  
                <div className={clases.header__logo}>
                    <img src='/assets/svg/logo.svg' alt=''></img>
                </div>
                <div className={clases.header__right}>
                    <HeaderSearch />
                    <HeaderCart />
                    <HeaderFilters />
                    <HeaderActions />
                </div>
            </div>
        </header>
    );
}

export default Header;