import { styled } from "linaria/react";
import { css } from "linaria";
import React from "react";
import ReactDOM from "react-dom";

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: #f15f79;
`;

const bla = css`
  h1 {
    color: red;
  }
`;
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
console.log(bla);
const App = () => <Title>Hello world!</Title>;

ReactDOM.render(<App />, document.getElementById("root"));
