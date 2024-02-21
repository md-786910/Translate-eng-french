import { useState } from "react";
import { Axios } from "../axios/axios";

function TranslateBox() {
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);
  const [translateText, setTranslateText] = useState("");

  // Handle translate
  const handleTranslate = async () => {
    try {
      setLoader(true);
      if (!text) {
        setLoader(false);
        return; // Add Toast to show to user
      }
      // Send to Backend
      const resp = await Axios.post("/translate", { text });
      if (resp?.status === 200) {
        setTranslateText(resp?.data?.result?.text);
        setLoader(false);
      }
    } catch (error) {
      alert(error?.response?.data?.messgae || error?.messgae);
      setLoader(false);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Translater Box : ENG-FRENCH</h1>
        </div>
        <div className="translateBox">
          <div className="engTranslateText">
            <textarea
              id="textarea"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type English Sentence..."
            ></textarea>
          </div>
          <div className="text_loader">{loader ? "TRANSLATING..." : ""}</div>
          <div className="resTranslateText">French : {translateText}</div>
        </div>
        <div className="btnContainer">
          <button onClick={() => handleTranslate()} disabled={loader}>
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}

export default TranslateBox;
