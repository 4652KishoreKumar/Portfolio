import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  
  max-width: 107rem;
  padding: 0 4rem;
`;
const GlobalStyles = createGlobalStyle`
& *{

  scrollbar-color: #387ADF #fff;
  scrollbar-width: thin;
      box-sizing: border-box;
    margin: 0;
    padding: 0;
}
& body{
    background-color: #fff;
    font-family: Poppins,sans-serif;
    position: relative;
}

& html{
  font-size: 70.5%;
}

`;
export default GlobalStyles;
const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "900px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const devices = {
  xs: `min-width: ${breakpoints.xs}`,
  sm: `max-width: ${breakpoints.sm}`,
  md: `max-width: ${breakpoints.md}`,
  lg: `max-width: ${breakpoints.lg}`,
  xl: `max-width: ${breakpoints.xl}`,
  "2xl": `max-width: ${breakpoints["2xl"]}`,
};