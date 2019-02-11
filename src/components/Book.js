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
    alignItems: "center"
  }
};

export default Book;
