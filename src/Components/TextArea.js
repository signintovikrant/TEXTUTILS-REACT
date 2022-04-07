import React, { useState } from "react";

console.log("");

export default function TextArea(props) {
  const handleUpClick = () => {
    // console.log("upperCase is clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("upperCase is clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    //console.log("upperCase is clicked");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
      let text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = ()=>{
  // let newText = text.split(/[  ]+/);
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}

  const [text, setText] = useState("");
  return (
    <>
      <div className="Container my-0" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Space
        </button>
      </div>
      <div className="Comtainer my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and characters count is: {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somethimg in the text box above to preview it here"}</p>
      </div>
    </>
  );
}
