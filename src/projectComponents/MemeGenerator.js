import React, { Component } from "react";
import NavBar from "./Navbar";
import Album from "./Album";
export class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      indexOfCurrentImg: 0,
      randImg: "",
      imgCount: 0,
      allMemeImgs: [],
      shuffledImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRanImg = this.handleRanImg.bind(this);
    this.handlePrevImg = this.handlePrevImg.bind(this);
    this.handleNextImg = this.handleNextImg.bind(this);
  }
  handleRanImg(event) {
    event.preventDefault();
    let rand = Math.floor(Math.random() * (this.state.allMemeImgs.length) - 1) + 1;
    if (!this.state.shuffledImgs.includes(this.state.allMemeImgs[rand].url)) {
      this.setState({
        randImg: this.state.allMemeImgs[rand].url,
        imgCount: this.state.imgCount + 1,
        shuffledImgs: this.state.shuffledImgs.concat(this.state.allMemeImgs[rand].url)
      }, () => {
        this.setState(
          {
            indexOfCurrentImg: this.state.shuffledImgs.indexOf(this.state.randImg)
          });
      })
    }
  }
  handlePrevImg() {
    this.setState({ indexOfCurrentImg: this.state.indexOfCurrentImg - 1 }, () => {
      this.setState({ randImg: this.state.shuffledImgs[this.state.indexOfCurrentImg] });
    })
  }
  handleNextImg() {
    this.setState({ indexOfCurrentImg: this.state.indexOfCurrentImg + 1 }, () => {
      this.setState({ randImg: this.state.shuffledImgs[this.state.indexOfCurrentImg] });
    })
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
      .catch((e) => console.log(`Error : ${e}`));
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
          handleNextImg={this.handleNextImg}
        />
      </div>
    );
  }
}
export default MemeGenerator;