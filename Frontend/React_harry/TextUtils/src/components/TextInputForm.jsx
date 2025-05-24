import { useState } from "react";

export default function TextInputForm({ heading, darkMode, showAlert }) {
  let [text, setText] = useState("");

  function handleTextInput(event) {
    setText(event.target.value);
  }

  function handleUpText() {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Text Uppercase ", "success");
  }

  function handleLwText() {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Text Lowercased ", "success");
  }

  function handleClearText() {
    setText("");
    showAlert("Text Cleared!", "success")
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
    showAlert("Text Encrypted ", "success");
  }

  function handleTextDecrypt() {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
      decryptedText += String.fromCharCode(text.charCodeAt(i) - 1);
    }
    setText(decryptedText);
    showAlert("Text Decrypted ", "success");
  }

  /*
  * Explanation of Extra space remover

    text.split(/[ ]+/) does splitting:

    split is a string method that divides the string into parts (called an array).

    The argument /[ ]+/ is a regular expression:

    [ ] → a space character

    + → one or more spaces

    So, wherever one or more spaces are found, the string is split into separate words.

  */
  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces removed", "success")
  }


  // Copy text logic

  function handleCopyText() {
    // let data = document.getElementById("textArea");
    // data.select();
    navigator.clipboard.writeText(text);
    showAlert("Text Copied", "success");
    // document.getSelection().removeAllRanges();
  }

  return (
    <>
      <h1>{heading}</h1>
      <form>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: darkMode === true ? "#E2E2B6" : "white",
            }}
            value={text}
            onChange={handleTextInput}
            placeholder="Enter text here"
            id="textArea"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleUpText}
          disabled={text.length == 0}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-info mx-2"
          onClick={handleLwText}
          disabled={text.length == 0}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2"
          onClick={handleClearText}
          disabled={text.length == 0}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleTextEncrypt}
          disabled={text.length == 0}
        >
          Encrypt
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleTextDecrypt}
          disabled={text.length == 0}
        >
          Decrypt
        </button>
        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={handleExtraSpaces}
          disabled={text.length == 0}
        >
          Clear Extra spaces
        </button>
        <button
          type="button"
          className="btn btn-light mx-2 border"
          onClick={handleCopyText}
          disabled={text.length == 0}
        >
          Copy
        </button>
      </form>
      <div className="mt-3">
        <h4>Text Summary</h4>
        <p>
          Total Words {(text.match(/\b\w+\b/g) || [] ).length} & Total Characters {text.length}
        </p>
        <p>{(0.008 * (text.match(/\b\w+\b/g) || [] ).length).toFixed(2)} Minutes to Read </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to Preview, Please enter some text"}</p>
      </div>
    </>
  );
}

/*
? --------  How word counter regex work ? -----------

synatx -->  (text.match(/\b\w+\b/g) || [] ).length

* regex explanation

    | Part          | Meaning                                                                                                                                  |
    |---------------|------------------------------------------------------------------------------------------------------------------------------------------|
    | /.../g        | Regular Expression with global flag → find ALL matches (not just the first one).                                                         |
    | \b            | Word boundary — the point between a word and a non-word character (like space, punctuation, start/end of line).                          |
    | \w+           | One or more (`+`) word characters (`\w`) — letters (a-z, A-Z), digits (0-9), and underscore `_`.                                         |
    | \b            | End the word at the next word boundary.                                                                                                  |


*   || [] means:

      If match() result is null, use an empty array [] instead.

      This avoids an error like Cannot read property 'length' of null.

*/