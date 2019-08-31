import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
  }
  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

export default globalStyle;
