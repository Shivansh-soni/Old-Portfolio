import CV from "../../Assets/CV.pdf";
import React from "react";

function CTA() {
  return (
    <div ClassName="cta" id="cta">
      <a href={CV} download className="btn">
        {" "}
        Download Cv
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
