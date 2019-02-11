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
    border: "2px solid grey",
    width: "100%",
    height: "100%"
  }
};

export default BookPage;
