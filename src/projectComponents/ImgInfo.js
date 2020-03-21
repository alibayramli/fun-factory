import React from "react";

export default function ImgInfo(props) {
  return (
    <div>
      <div className="meme">
        <img alt="" src={props.randImg}></img>
        <h2 className="top">{props.randImg ? props.topText : ""}</h2>
        <h2 className="bottom">{props.randImg ? props.bottomText : ""}</h2>
        <br /> <br />
      </div>
    </div>
  );
}
