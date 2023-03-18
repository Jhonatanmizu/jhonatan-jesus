import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
         *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html{
        font-size: 62.5%;
    }
    body{
        width: 100%;
        height: 100%;
        font-size: 1.6rem;
    }
    #root{
        margin:0 auto;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`;
