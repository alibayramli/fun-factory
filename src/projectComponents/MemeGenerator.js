import React, { Component } from "react";
import Form from "./Form";
export class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randImg: "",
      allMemeImgs: [],
      planets: {},
      hasErrors: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRanImg = this.handleRanImg.bind(this);
  }
  handleRanImg(event) {
    event.preventDefault();
    let rand = Math.floor(Math.random() * this.state.allMemeImgs.length) + 1;
    this.setState({ randImg: this.state.allMemeImgs[rand].url });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        let { memes } = res.data;
        return this.setState({ allMemeImgs: memes });
      })
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return (
      <div>
        <p
          style={
            !this.randImg
              ? { color: "#6441a5", fontFamily: "monospace", fontSize: "200%" }
              : { display: "none" }
          }
        >
          {this.state.randImg
            ? "Here is your meme, enjoy :)"
            : "First shuffle an image!"}
        </p>
        <Form
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          handleChange={this.handleChange}
          handleRanImg={this.handleRanImg}
        />

        <div className="meme">
          <img alt="" src={this.state.randImg}></img>
          <h2 className="top">
            {this.state.randImg ? this.state.topText : ""}
          </h2>
          <h2 className="bottom">
            {this.state.randImg ? this.state.bottomText : ""}
          </h2>
          <br /> <br />
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
