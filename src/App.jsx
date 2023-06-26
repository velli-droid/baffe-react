import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components';
import getWindowDimensions from './utils/getWindowDimensions';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: clamp(4px, calc(var(--viewport-width, 100vw) * .56 / 100), 10px);
        @media only screen and (max-width: 640px) {
        font-size: 10px;
        }
    }

    :root {
        --main-font: 'Montserrat', sans-serif;
        --color-black-100: #000000;
        --color-black-40: rgba(0, 0, 0, 0.4);
        --color-white-100: #FFFFFF;
        --color-white-70: rgba(255, 255, 255, 0.7);
        --color-white-30: rgba(255, 255, 255, 0.3);
        --color-gray-80: #404040;
        --color-gray-60: #737373;
        --color-gray-40: #A3A3A3;
        --color-gray-30: #C1C1C1;
        --color-gray-20: #D0D0D0;
        --color-gray-15: #EEEEEE;
        --color-gray-10: #F6F6F6;
        --color-red-60: #FF0000;
    }

    body {
        margin: 0;
        padding: 0;
        color: var(--color-black-100);
        background: var(--color-white-100);
        font-family: var(--main-font);
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 130%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: .3s linear;
    }

    ul {
        padding: 0;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;

        li {
            display: block;
            list-style: none;
            padding: 0;
        }
    }

    img,
    picture {
        max-width: 100%;
    }

    * {
        box-sizing: border-box;
        &::before,
        &::after {
            box-sizing: border-box;
        }
    }

    .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: var(--viewport-height, 100vh);
    }
`;

const App = () => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions());
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        function handleWindowResize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    
    return (
        <>
            <GlobalStyles />
        </>
    )
}

export default App

