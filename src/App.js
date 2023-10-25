import React from "react";
import Posts from "./components/Posts";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Posts Sharer</h1>
      </header>
      <Posts />
    </div>
  );
}