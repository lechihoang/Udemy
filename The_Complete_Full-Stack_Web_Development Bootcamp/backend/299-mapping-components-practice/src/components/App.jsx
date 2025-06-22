import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia"

function createCard(value) {
  return (
    <Card
    key={value.id}
    emoji={value.emoji}
    name={value.name}
    meaning={value.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)};
      </dl>
    </div>
  );
}

export default App;
