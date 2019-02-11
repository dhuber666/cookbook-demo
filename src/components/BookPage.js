import React from "react";

const BookPage = props => {
  return (
    <div style={styles.bookPage}>
      <h1 style={styles.bookTitle}> Recipe </h1>
      <p>Content</p>
    </div>
  );
};

const styles = {
  bookPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    flexDirection: "column",
    boxShadow: "inset 3px 0 3px 3px #000",
    width: "100%",
    height: "100%"
  }
};

export default BookPage;
