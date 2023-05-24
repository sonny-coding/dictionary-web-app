/* eslint-disable react/prop-types */
// import React from "react";
import { useWord } from "../hooks/useWord";

// eslint-disable-next-line react/prop-types
const DisplayWord = ({ data }) => {
  //   const { data, isLoading, isError } = useWord(word);
  //   if (isError) return <div>failed to load</div>;
  //   if (isLoading) return <div>loading...</div>;
  return <div>{data?.sourceUrls}</div>;
};

export default DisplayWord;
