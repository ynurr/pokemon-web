import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* Pretendard 폰트 적용 */
     @import url('https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/variable/pretendardvariable-dynamic-subset.css');

    /* Reset */
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        font-family: 'Pretendard Variable', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        background-color: #f8f9fa;
        color: #333333;
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