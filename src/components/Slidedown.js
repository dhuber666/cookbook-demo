import React from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const Slidedown = props => {
  return <SlideDown>{props.open ? props.children : null}</SlideDown>;
};

const styles = {
  dropdown: {
    height: "80px",
    widht: "100%"
  }
};

export default Slidedown;
