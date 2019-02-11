import React, { useState } from "react";
import Slidedown from "./Slidedown";
import Book from "./Book";
import BookPage from "./BookPage";
import FlipPage from "react-flip-page";

function App() {
  const [open, setOpen] = useState(false);

  const toggleSlidedown = () => {
    setOpen(!open);
  };

  return (
    <div style={styles.main}>
      <Slidedown open={open}>
        <div style={styles.slidedown}>
          <div style={styles.slidecontent}>
            <h3>Menu 1</h3>
            <p>Some text...</p>
          </div>

          <div style={styles.slidecontent}>
            <h3>Menu 2</h3>
            <p>Some more text...</p>
          </div>
        </div>
      </Slidedown>
      <div style={styles.divider} onClick={toggleSlidedown}>
        <div style={styles.triangle} />
      </div>
      <div style={{ height: "600px", width: "100%" }}>
        <FlipPage orientation="horizontal" responsive>
          <Book>
            <BookPage />
            <BookPage />
          </Book>
          <Book>
            <BookPage />
            <BookPage />
          </Book>
        </FlipPage>
      </div>
    </div>
  );
}

const styles = {
  slidedown: {
    height: "150px",
    width: "100vw",
    background: "red",
    display: "flex",
    padding: "20px",
    justifyContent: "space-around",
    alignItems: "center"
  },
  main: {
    padding: 0
  },
  slidecontent: {
    flexBasis: "40%",
    height: "50%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "red",
    fontFamily: "Roboto"
  },
  divider: {
    height: "650px",
    width: "6px",
    background: "red",
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
    zIndex: "100"
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "8px solid white",
    position: "absolute",
    bottom: 0
  }
};

export default App;
