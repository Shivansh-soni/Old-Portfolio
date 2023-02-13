import React from "react";
import "./Header.css";
import CTA from "./CTA";
import me from "../../Assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shivansh Soni</h1>
        <h5 className="text-light">Front-End Developer </h5>
        <CTA />

        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
