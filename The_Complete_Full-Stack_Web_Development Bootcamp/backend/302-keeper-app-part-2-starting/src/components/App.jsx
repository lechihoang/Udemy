import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((value) => {
        return (
          <Note
            key={value.id}
            title={value.title}
            content={value.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
