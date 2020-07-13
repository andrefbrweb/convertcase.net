import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #222;
    --color-second: #222;

    font-family: 'Montserrat', sans-serif;
    --font-code: monospace;

    --spacing: 2.0rem;
  }

  *,
  *:after,
  *:before {
    box-sizing: content-box;
    border: 0;
    margin: 0;
    padding: 0;
  }

  body {
    margin:0;
    padding:0;
    background-color: #ededed;
  }

  .container{
      display: flex;
      align-items:center;
      flex-direction:column; 
      
  }

  .title{
    margin-top: 70px;
      color: #013d4f;
  }

  .textarea{
    padding:10px;
    margin-top: 40px;
  }

`
export default GlobalStyle
