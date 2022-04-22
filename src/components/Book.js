import React from "react";
import styled from "styled-components";
import { theme } from "../util/theme";

const Book = ({
  leftContent,
  rightContent,
  nextHandler,
  prevHandler,
  showPrev,
  showNext,
}) => {
  const prevText = "❮❮";
  const nextText = "❯❯";
  return (
    <BookRow>
      <BookLeftPage>
        <LeftNavView>
          {showPrev === true && (
            <NavButton onClick={prevHandler}>{prevText}</NavButton>
          )}
        </LeftNavView>
        <LeftTextView>{leftContent}</LeftTextView>
      </BookLeftPage>
      <BookRightPage>
        <RightTextView>{rightContent}</RightTextView>
        <RightNavView>
          {showNext === true && (
            <NavButton onClick={nextHandler}>{nextText}</NavButton>
          )}
        </RightNavView>
      </BookRightPage>
    </BookRow>
  );
};

const BookRow = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  flex: 1;
  height: 100%;
  width: 95%;
`;

const BookLeftPage = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  height: 300px;
  background-color: ${theme.colors.primary};
  border-right: solid 1px ${theme.colors.white};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px 5px 5px 10px;
`;

const LeftTextView = styled.div`
  flex: 6;
`;
const LeftNavView = styled.div`
  flex: 1;
`;

const BookRightPage = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  height: 300px;
  border-left: solid 1px ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 5px 5px 10px;
`;

const RightTextView = styled.div`
  flex: 6;
`;
const RightNavView = styled.div`
  flex: 1;
`;

const NavButton = styled.a`
  padding: 5px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  border-radius: 5px;
  font-size: 32px;
`;

export default Book;
