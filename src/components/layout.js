import React from "react";
import "./layout.css";
import Menu from "./menu";

export default ({ children }) => {
  return (
    <div className="app">
      <Menu />
      {children}
    </div>
  )
}