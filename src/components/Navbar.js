import React from "react";
import '../App.css';

import linkedIn from '../assets/images/LI-black.png';
import github from '../assets/images/GitHub-Mark-64px.png';
import mail from '../assets/images/mail-icon-removebg-preview.png';
import download from '../assets/images/download-icon.png';
import resume from '../assets/images/lo-selby-resume.pdf';

function Navbar () {
    return (
        <div>
            <div className="collapse " id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-9 py-3 py-sm-0 pb-sm-1 mt-3">
                <h3 id="shadow" className="text-dark fw-bold">About Lo</h3>
                <p id="about-me" className="text-dark text-break fs-6">
                  Seasoned CX Leader in tech turned Web Developer with proficiency in full-stack development. Skilled in working with a team, developing plans, managing projects, and user documentation. My passions lie with debugging code, mobile functionality, learning the latest technologies, and enhancing user experience with the customer in mind.
                  I excel working with teams where we have the opportunity to continue to grow knowledge and skills. En route to receive full-stack development certifiate from the University of Washington by May 2022.
                  <br/>
                  <br/>
                  I grew up in Michigan and Colorado but found my home in Vashon Island, Washington where I reside with my furkid, Mesa. You may have seen his face throughout my portfolio.

                </p>
                <div id="resumeBtn" className="mb-2">
                  <a id="shadow-link" className="link-dark fs-5 "  href={resume}> <img src={download} alt="Download Icon" height="22" width="22"/> Resume</a>
                </div>
              </div>
              <div id="contact-div" className="col-sm-12 col-md-2 py-4 py-sm-0 pb-sm-3 pt-sm-4 text-center mx-auto my-auto ">
                <h3 id="shadow" className="text-dark fw-bold">Contact</h3>
              <span>
                <a className="text-muted" href="https://www.linkedin.com/in/loselby/"><img src={linkedIn} width="25" height="20" alt="LinkedIn Logo"/></a>
                <a className="text-muted" href="https://github.com/lonewolfco"><img src={github} width="23" height="21" alt="GitHub Logo"/></a>
                <a className="text-muted" href="mailto:loselby@icloud.com"><img src={mail} width="25" height="22" alt="Mail Icon"/></a>
              </span>
              </div>
            </div>
            {/* <!-- closing container tag --> */}
          </div>
          {/* <!--closing collapse tag  --> */}
        </div>


            <nav>
            <div id="nav" className="navbar navbar-dark shadow-5-strong">
                <div className="container-fluid">
                    <a id ="nav-header" href="#" className="navbar-brand d-flex align-items-center justify-content-start">
                    LO SELBY
                    </a>
                    <button id="nav-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" aria-controls="#navbarHeader" ></span>
                    </button>
                </div>
                {/* <!-- closing navbar tag --> */}
                </div>
            </nav>
    </div>
    
    );
}
  
export default Navbar;