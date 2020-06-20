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
      randImg: "",
      previousImg: "",
      showPreviousButton: false,
      imgCount: 0,
      allMemeImgs: [],
      shuffledImgs: [],
      hasErrors: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRanImg = this.handleRanImg.bind(this);
    this.handlePrevImg = this.handlePrevImg.bind(this);
  }
  handleRanImg(event) {
    event.preventDefault();
    let rand = Math.floor(Math.random() * (this.state.allMemeImgs.length) - 1) + 1;
    this.setState(
      {
        randImg: this.state.allMemeImgs[rand].url,
        imgCount: this.state.imgCount + 1,
        shuffledImgs: this.state.shuffledImgs.concat(this.state.allMemeImgs[rand].url)
      }, () => {
        if (this.state.imgCount > 1) {
          this.setState(
            {
              showPreviousButton: true
            }, () => {
              this.setState({ previousImg: this.state.shuffledImgs[this.state.shuffledImgs.length - 2] })
            });
        }
      });
  }
  handlePrevImg(event) {
    console.log('current url: ' + this.state.randImg + ' previous url:' + this.state.previousImg)
    this.setState({ randImg: this.state.previousImg, showPreviousButton: false });
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
          handlePrevImg={this.handlePrevImg}

        />
      </div>
    );
  }
}

export default MemeGenerator;
