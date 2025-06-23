import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* Reset */
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, input, textarea, button {
        font-family: 'Pretendard Variable', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333333;
    }

    html, body {
        background-color: #f8f9fa;
    }
   

    p {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        background: none;
        border: none;
        font: inherit;
        cursor: pointer;
    }

    ul, ol {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`

export default GlobalStyle