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
    background: "#552C00",
    display: "flex",
    padding: "20px",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "3px 3px 5px 6px #ccc"
  },
  main: {
    padding: 0
  },
  slidecontent: {
    flexBasis: "40%",
    height: "50%",
    background: "rgb(214,179,49)",
    background:
      "linear-gradient(90deg, rgba(214,179,49,0.8655170686438638) 0%, rgba(255,159,0,1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "black",
    fontFamily: "Roboto"
  },
  divider: {
    height: "650px",
    width: "6px",
    background: "#552C00",
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
    borderLeft: "3px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "10px solid #552C00",
    position: "absolute",
    bottom: 0
  }
};

export default App;
