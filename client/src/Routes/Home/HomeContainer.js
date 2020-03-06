import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { translationApi } from "../../api";
import copy from "copy-to-clipboard";

const HomeContainer = () => {
  const [googleText, setGoogleText] = useState("");
  const [papagoText, setPapagoText] = useState("");

  const translation = async (text, type) => {
    if (type === "google") {
      const {
        data: {
          data: { translations: data }
        }
      } = await translationApi.google(text);
      const { translatedText } = data[0];
      setGoogleText(translatedText);
    } else if (type === "papago") {
      const {
        data: {
          message: {
            result: { translatedText: resultText }
          }
        }
      } = await translationApi.papago(text);
      setPapagoText(resultText);
    }
  };

  const onInput = e => {
    const input = e.target.value;
    const changeText = input.replace(/(\n|\r\n)/g, " ");

    translation(changeText, "google");
    translation(changeText, "papago");
  };

  const googleTextCopy = () => {
    copy(googleText);
  };

  const papagoTextCopy = () => {
    copy(papagoText);
  };

  return (
    <HomePresenter
      onInput={onInput}
      googleText={googleText}
      papagoText={papagoText}
      googleTextCopy={googleTextCopy}
      papagoTextCopy={papagoTextCopy}
    />
  );
};

export default HomeContainer;
