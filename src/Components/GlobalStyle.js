import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
  }
  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size:12px;
    background-color:#011627;
    color:#fdfffc;
    padding-top:80px;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

export default globalStyle;
