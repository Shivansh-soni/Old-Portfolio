import React from "react";
import "./Footer.css";
import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="/" className="footer_logo">
        SHIVANSH
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Porfolio</a>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://discord.gg/wuhJN8n8c3">
          <FaDiscord />
        </a>
        <a href="https://github.com/Shivansh-soni">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/k_se_kalakaar/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SHIVANSH SONI . All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
