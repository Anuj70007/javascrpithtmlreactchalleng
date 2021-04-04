//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";
const fname = "Anuj";
const lname = "Chaudhary";
var d = new Date();

ReactDom.render(
  <div>
    <p>Created by {fname + " " + lname}</p>
    <p>copyright {d.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
