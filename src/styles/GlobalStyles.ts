import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{isDark: boolean }>` 
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    /* background: #F6F8FF; */
    background: ${(props) => (props.isDark ? "#141D2F" : "#F6F8FF;")};
}
`;

export default GlobalStyles;