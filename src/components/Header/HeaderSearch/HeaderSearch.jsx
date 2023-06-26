import React from 'react';

const HeaderSearch = () => {
    return (
        <div className='header__search js-search'>
            <div className='header__search-toggle js-search-toggle'>
                <svg className='icon-svg'>
                    <use xlinkHref='/assets/svg/sprite.svg#search-loupe'></use>
                </svg>
            </div>
            <div className='header__search-wrapper'>
                <form action='#' className='header__search-form'>
                    
                </form>
            </div>
        </div>
    );
}

export default HeaderSearch;
