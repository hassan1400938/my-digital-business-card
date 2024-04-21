import React from "react";

import Mail from "../assets/mail.svg";
import Linkedin from "../assets/linkedin.svg";

export default function MainContent() {
  return (
    <main>
      <h1 className="name">Waqar M.</h1>
      <h2 className="position">Website Developer</h2>
      <a className="webLink" href="https://rixosol.com/muhammadwaqar">
        rixosol.com
      </a>
      <div className="btns-container">
        <a href="mailto:waqar@rixosol.com" className="emailBtn btn">
          <img src={Mail}></img>Email
        </a>
        <a
          href="https://www.linkedin.com/in/waqarm119/"
          className="linkedinBtn btn"
        >
          <img src={Linkedin}></img>LinkedIn
        </a>
      </div>

      <h2 className="aboutHeading">About</h2>
      <p className="aboutDes">
        I am a website developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </p>

      <h2 className="interestsHeading">Interests</h2>
      <p className="interestsDes">
        Coding guru. Nature lover. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
    </main>
  );
}
