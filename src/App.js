import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "./api/Book";
import {
  LoadingIndicator,
  Book,
  Sentence,
  ClickedView,
} from "./components/index";
import { theme } from "./util/theme";
import "./App.css";

const App = () => {
  const { loading, error, data } = useQuery(getBookQuery);
  const book = data === undefined ? undefined : data.book;
  const pages = book === undefined ? [] : book.pages;
  const [maxPage, setMaxPageIndex] = useState(0);
  const [currentPage, setCurrentPageIndex] = useState(0);
  const [nextPage, setNextPageIndex] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [clickedWord, setClickedWord] = useState(null);
  const [showNextNav, setShowNextNav] = useState(true);

  useEffect(() => {
    setNextPageIndex(currentPage + 1);
    setMaxPageIndex(pages.length - 1);
    return () => undefined;
  }, [pages]);

  const showWordValue = (token) => {
    setClickedWord(token.value);
    setClicked(true);
  };

  const goBackHandler = () => {
    setClickedWord(null);
    setClicked(false);
  };

  const gotToNextPage = () => {
    const currentPageInd = currentPage + 2;
    const nextPageInd = nextPage + 2;
    if (currentPageInd === maxPage || nextPageInd === maxPage) {
      setShowNextNav(false);
      setCurrentPageIndex(currentPageInd);
      setNextPageIndex(nextPageInd);
      return;
    }
    if (currentPageInd > maxPage || nextPageInd > maxPage) {
      setCurrentPageIndex(currentPage);
      setNextPageIndex(null);
      return;
    }
    setCurrentPageIndex(currentPageInd);
    setNextPageIndex(nextPageInd);
  };

  const gotToPrevPage = () => {
    setShowNextNav(true);
    setCurrentPageIndex(currentPage - 2);
    setNextPageIndex(nextPage - 2);
  };

  const PageLeftContent = () => {
    const leftSentence = pages[currentPage].tokens;
    return leftSentence.map((token, index) => (
      <Sentence
        content={pages[currentPage].content}
        token={token}
        WordClickHandler={showWordValue}
      />
    ));
  };

  const PageRightContent = () => {
    const leftSentence = pages[nextPage].tokens;
    return leftSentence.map((token, index) => (
      <Sentence
        content={pages[nextPage].content}
        token={token}
        WordClickHandler={showWordValue}
      />
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading === true ? (
          <LoadingIndicator
            type={"spinningBubbles"}
            color={theme.colors.secondary}
          />
        ) : (
          <>
            {clicked === true ? (
              <ClickedView value={clickedWord} backHandler={goBackHandler} />
            ) : (
              <Book
                leftContent={<PageLeftContent />}
                rightContent={<PageRightContent />}
                nextHandler={gotToNextPage}
                prevHandler={gotToPrevPage}
                showPrev={currentPage > 1}
                showNext={showNextNav}
              />
            )}
          </>
        )}
      </header>
    </div>
  );
};

export default App;
