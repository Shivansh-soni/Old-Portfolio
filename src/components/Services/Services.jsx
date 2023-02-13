import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services" data-aos="zoom-in" data-aos-duration="800">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <article
          className="service"
          onClick={() => {
            window.open("https://www.instagram.com/kalakaar_2091/");
          }}
        >
          <div className="service_head">
            <h3>Photographer </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                It's my go-to hobby to take pictures. Having worked in the field
                for more than three years.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                I am also a member of Amogh Photography Club. This is a
                photography club of my college.
              </p>
            </li>
          </ul>
        </article>

        <a href="#portfolio" style={{ textDecoration: "none", color: "white" }}>
          <article className="service">
            <div className="service_head">
              <h3>ForntEnd Developer </h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I have a keen knowledge of HTMl , Css and javascript and
                  created some projects too. Click to visit them.
                </p>
              </li>
              <li>
                <BiCheck className="service_list_icon" />
                <p>
                  I do have more than 3 years of experience in this and
                  Currently I am Learning MERN stack.
                </p>
              </li>
            </ul>
          </article>
        </a>

        <article
          className="service"
          onClick={() => {
            window.open(
              "https://www.youtube.com/playlist?list=PLwj8REeu4M2aGyAX_eWbDZDROTQBpagOt"
            );
          }}
        >
          <div className="service_head">
            <h3> Graphic Designer </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                I am quite Familier with Adobe Illustrator and Photoshop and
                have 2 years of experience .
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                I also know Adobe Premier Pro and AfterEffects can create
                posters and motion posters
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
