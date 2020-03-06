import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [resultText, setResultText] = useState("");

  const onInput = e => {
    const input = e.target.value;
    setResultText(input.replace(/(\n|\r\n)/g, " "));
  };

  return <HomePresenter onInput={onInput} resultText={resultText} />;
};

export default HomeContainer;
