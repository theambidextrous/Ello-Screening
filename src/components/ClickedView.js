import React from "react";
import styled from "styled-components";
import { theme } from "../util/theme";

const ClickedView = ({ value, backHandler }) => {
  const backText = " <<< Back";
  return (
    <ClickedViewRow>
      <ClickedViewTop>
        <BackText>
          <a href="#" onClick={backHandler}>
            {backText}
          </a>
        </BackText>
      </ClickedViewTop>
      <ClickedViewBottom>
        <Paragraph>{value}</Paragraph>
      </ClickedViewBottom>
    </ClickedViewRow>
  );
};

const ClickedViewRow = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  flex: 1;
  height: 100%;
  width: 95%;
`;

const ClickedViewTop = styled.div`
  flex: 1;
  height: 300px;
  background-color: ${theme.colors.primary};
  padding: 10px 5px 5px 10px;
`;
const ClickedViewBottom = styled.div`
  flex: 6;
  height: 300px;
  background-color: ${theme.colors.primary};
  padding: 10px 5px 5px 10px;
`;

const Paragraph = styled.p`
  font-size: 42px;
  color: ${theme.colors.backgroundColor};
  font-weight: 700;
`;

const BackText = styled.p`
  font-size: 22px;
  color: ${theme.colors.backgroundColor};
  font-weight: 500;
`;

export default ClickedView;
