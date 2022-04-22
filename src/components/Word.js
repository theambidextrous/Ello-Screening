import React from "react";
import styled from "styled-components";
import { theme } from "../util/theme";

const Word = ({ word, OnClickHandler, token }) => (
  <StyledWord onClick={() => OnClickHandler(token)} href="#">
    {word}
  </StyledWord>
);

const StyledWord = styled.a`
  color: ${theme.colors.backgroundColor};
  text-decoration: none;
  font-size: 32px;
  font-weight: 700;
`;

export default Word;
