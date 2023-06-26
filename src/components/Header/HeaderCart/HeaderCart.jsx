import React from 'react';

const HeaderCart = () => {
    return (
        <div className='header__cart'>
            <svg className='icon-svg'>
                <use xlinkHref='/assets/svg/sprite.svg#cart'></use>
            </svg>
        </div>
    );
}

export default HeaderCart;
