import React, { useState } from 'react';

function Wordboard() {
  const [textList, setTextList] = useState([]);
  const [speak, setSpeak] = useState(false);

  const keyLayout2 = ["textbox", "redSpeak", "backButton", "backspaceButton"];
  const keyLayout = [
    // ... keyLayout content ...
  ];

  // Create images
  const createImageHTML = (name) => {
    return <img src={`./Images/${name}.png`} alt={name} />;
  };

  const handleTextBoxClick = () => {
    _triggerEvent();
    textToSpeech(textList);
  };

  const handleBackspaceClick = () => {
    while (textList.length > 0) {
      textList.pop();
    }
    _triggerEvent();
    _update(textList);
  };

  const handleBackButtonClick = () => {
    textList.pop();
    _triggerEvent();
    _update(textList);
  };

  const handleRedSpeakClick = () => {
    setSpeak(!speak);
  };

  const handleKeyClick = (key) => {
    textList.push(key);

    if (speak) {
      textToSpeech(key);
    }

    _update(textList);
  };

  const _triggerEvent = () => {
    console.log("Event triggered!");
  };

  const _update = (list) => {
    let string3 = "";

    list.forEach((item) => {
      string3 += " " + item;
    });

    document.getElementById("text").innerHTML = string3;
  };

  return (
    <div className="wordboard">
      <div className="wordboard_keys">{_createKeys()}</div>
    </div>
  );

  function _createKeys() {
    const keyElements = [];

    keyLayout2.forEach((key) => {
      let keyElement;

      switch (key) {
        case "textbox":
          keyElement = (
            <button
              type="button"
              className="textBox"
              id="text"
              onClick={handleTextBoxClick}
            >
              {createImageHTML(key)}
            </button>
          );
          break;

        case "backspaceButton":
          keyElement = (
            <button
              type="button"
              className="backspaceButton"
              onClick={handleBackspaceClick}
            >
              {createImageHTML(key)}
            </button>
          );
          break;

        case "backButton":
          keyElement = (
            <button
              type="button"
              className="backButton"
              onClick={handleBackButtonClick}
            >
              {createImageHTML(key)}
            </button>
          );
          break;

        case "redSpeak":
          keyElement = (
            <button
              type="button"
              className="redSpeak"
              onClick={handleRedSpeakClick}
            >
              {speak ? createImageHTML("greenSpeak") : createImageHTML(key)}
            </button>
          );
          break;

        default:
          break;
      }

      if (keyElement) {
        keyElements.push(keyElement);
      }
    });

    keyLayout.forEach((key) => {
      const keyElement = (
        <button
          type="button"
          className="wordboard_key"
          onClick={() => handleKeyClick(key)}
        >
          {createImageHTML(key)}
        </button>
      );

      keyElements.push(keyElement);
    });

    return keyElements;
  }
}

export default Wordboard;