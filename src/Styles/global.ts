import { createGlobalStyle } from 'styled-components';

import reactBG from '../Assets/Images/react-logo.png';

 export default createGlobalStyle`
    
    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        //background: #1F618D url(${reactBG}) no-repeat 50% 35%;
        background: #1F618D  no-repeat 50% 35%;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
        color: #1f618d;
    }

    #root{
        max-width: 968px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
 `;