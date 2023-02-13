import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/shivansh-soni-a97321231/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Shivansh-soni"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/k_se_kalakaar/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
