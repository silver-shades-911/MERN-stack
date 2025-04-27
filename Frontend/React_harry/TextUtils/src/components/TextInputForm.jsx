import { useState } from "react";

export default function TextInputForm({ heading }) {
  let [text, setText] = useState("Enter text here");

  function handleTextInput(event) {
    setText(event.target.value);
  }

  function handleUpText() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLwText() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleClearText() {
    setText("Enter text here");
  }

  function handleTextEncrypt() {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
      encryptedText += String.fromCharCode(text.charCodeAt(i) + 1);

/*
* Logic  Explanation
    text = "apple"
    text.charCodeAt(i) this code ---- generate UTF-16 code point --> e.g. 19 (original)
    +1 ---> 19 + 1 (shift by 1)
    String.fromCharCode() ---> Again convert that fake UTF-16 code into String to display
*/
    }
    setText(encryptedText);
  }

  function handleTextDecrypt() {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
      decryptedText += String.fromCharCode(text.charCodeAt(i) - 1);
    }
    setText(decryptedText);
  }

  return (
    <>
      <h2>{heading}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            Textarea :
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextInput}
            id="textArea"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpText}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleLwText}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleClearText}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleTextEncrypt}
        >
          Encrypt
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleTextDecrypt}
        >
          Decrypt
        </button>
      </form>
      <div className="container mt-3">
        <h4>Text Summary</h4>
        <p>
          Total Words {text.split(" ").length} & Total Characters {text.length}{" "}
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes to Read </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
