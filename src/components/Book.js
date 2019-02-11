import React from "react";

const Book = props => {
  return <div style={styles.book}>{props.children}</div>;
};

const styles = {
  book: {
    display: "flex",
    justifyContent: "space-around",

    flexDirection: "row",
    height: "600px",
    width: "100%",
    alignItems: "center",
    background: "rgb(214,179,49)",
    background:
      "linear-gradient(90deg, rgba(214,179,49,0.8655170686438638) 0%, rgba(255,159,0,1) 100%)"
  }
};

export default Book;
