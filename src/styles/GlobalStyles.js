import {createGlobalStyle} from "styled-components";

export const GlobalStyles=createGlobalStyle`
 
:root {
    --white-bg: #ffffff;
    --black-footer: #000000;
    --font-color: #000000;
    
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-family: "Montserrat", sans-serif;
    color: #000000;
    overflow-x:hidden;
}
a {
    text-decoration: none;
    color: #000000;
}

a:visited{
    color: #000000;
}
li {
    list-style:none
}

`;