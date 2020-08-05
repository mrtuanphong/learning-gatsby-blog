import React from "react";
import "./menu.css";

export default () => {
  return (
    <header>
      <h3 className="nav-brand"><a href={`/`}>Gatsby Blog Demo</a></h3>
      <ul>
        <li className="nav-item"><a href={`/contact/`}>Liên hệ</a></li>
        <li className="nav-item"><a href={`/about/`}>Giới thiệu</a></li>
        <li className="nav-item"><a href={`/`}>Trang chủ</a></li>
      </ul>
    </header>
  )
}