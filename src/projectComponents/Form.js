import React from "react";

export default function Form(props) {
  return (
    <div>
      <form className="meme-form">
        <input
          name="topText"
          value={props.topText}
          type="text"
          placeholder="Top text:"
          onChange={props.handleChange}
        ></input>
        <input
          name="bottomText"
          value={props.bottomText}
          type="text"
          placeholder="Bottom text:"
          onChange={props.handleChange}
        ></input>
        <button onClick={props.handleRanImg}>Shuffle</button>
      </form>
    </div>
  );
}
