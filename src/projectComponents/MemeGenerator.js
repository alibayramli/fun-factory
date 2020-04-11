import React, { Component } from "react";
import NavBar from "./Navbar";
import Album from "./Album";
import { Typography } from "@material-ui/core";
export class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      test: "but it works",
      randImg: "",
      allMemeImgs: [],
      hasErrors: false,
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
      .then((res) => res.json())
      .then((res) => {
        let { memes } = res.data;
        return this.setState({ allMemeImgs: memes });
      })
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    return (
      <div>
        <NavBar />

        <Album
          component={this.state}
          src={this.handleRanImg}
          handleChange={this.handleChange}
        />

        {/* <Typography variant="h6">
          {this.state.randImg
            ? "Here is your meme, enjoy :)"
            : "First shuffle an image!"}
        </Typography>

        <Form
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          handleChange={this.handleChange}
          handleRanImg={this.handleRanImg}
        />
        <ImgInfo
          randImg={this.state.randImg}
          topText={this.state.topText}
          bottomText={this.state.bottomText}
        /> */}
      </div>
    );
  }
}

export default MemeGenerator;
