import React from "react";
import Word from "./Word";

const Sentence = ({ content, token, WordClickHandler }) => {
  const sliceStart = token.position[0];
  const sliceEnd = token.position[1] + 1;
  const word = String(content).slice(sliceStart, sliceEnd);
  return (
    <Word
      word={word}
      OnClickHandler={WordClickHandler}
      token={token}
      href="#"
    />
  );
};

export default Sentence;
