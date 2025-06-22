import React from "react";
import ReactDOM from "react-dom";

const name = "abc";
const number = 11;

ReactDOM.render(
    <div>
        <h1>Hello {name}</h1>,
        <h1>My lucky number is {number}</h1>,
    </div>
    ,document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
