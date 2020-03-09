import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { translationApi } from "../../api";
import copy from "copy-to-clipboard";

const apiType = {
  google: "google",
  papago: "papago"
};

const HomeContainer = () => {
  const [googleText, setGoogleText] = useState("");
  const [papagoText, setPapagoText] = useState("");

  const translation = async (text, type) => {
    if (type === apiType.google) {
      const {
        data: {
          data: { translations: data }
        }
      } = await translationApi.googleCloud(text);
      const { translatedText } = data[0];
      setGoogleText(translatedText);

      // const data = translationApi.google(text);
      // const promise = Promise.resolve(data);
      // promise.then(value => {
      //   const {
      //     data: { text: text }
      //   } = value;
      //   setGoogleText(text);
      // });
    } else if (type === apiType.papago) {
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

    translation(changeText, apiType.google);
    translation(changeText, apiType.papago);
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
