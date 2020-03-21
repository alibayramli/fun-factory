import React from "react";
import { Button, TextField } from "@material-ui/core";
export default function Form(props) {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Top text"
          variant="outlined"
          name="topText"
          value={props.topText}
          type="text"
          placeholder="Top text:"
          onChange={props.handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Bottom text"
          variant="outlined"
          name="bottomText"
          value={props.bottomText}
          type="text"
          placeholder="Bottom text:"
          onChange={props.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={props.handleRanImg}
        >
          Shuffle
        </Button>
      </form>
    </div>
  );
}
