import React from "react";
import ReactLoading from "react-loading";

export const LoadingIndicator = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"5%"} width={"5%"} />
);
