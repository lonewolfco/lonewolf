import React from "react";
import '../App.css';
import { Row, Col, Container } from "react-bootstrap/";

// import images
import mesa from '../assets/images/Mesa-Logo.png';
import linkedIn from '../assets/images/LI-In-Bug.png';
import gitHub from '../assets/images/GitHub-Mark-Light-64px.png';
import mail from '../assets/images/mail-iconWhite.png';

function Footer () {
    return (

        <>

        <Container>

            <Row >
                
                <footer className="text-light py-5 opacity-5 d-flex flex-wrap justify-content-between align-items-center mx-auto my-auto">
                
                <Col  xs={10}  >
                    <div className="justify-content-start">
                    <h4 className="my-1"><img className="mx-2" src={mesa} height="45" width="45" alt="photo of Mesa, Lo's Husky"/>   &copy; Lone Wolf Co. </h4>
                    </div>

                </Col>
                    
        {/* <!-- Footer Icon Links --> */}
          
          <Col xs={2} >
          
          <div  className="justify-content-end ">
        
                
                    <a className="mx-1" href="https://www.linkedin.com/in/loselby/">
                        <img src={linkedIn} width="25" height="20" alt="LinkedIn Logo"/></a>
               
                    <a className="mx-1" href="https://github.com/lonewolfco">
                        <img src={gitHub} width="23" height="21" alt="GitHub Logo"/>
                    </a>
                
                
                    <a className="mx-1" href="mailto:loselby@icloud.com">
                        <img src={mail} width="25" height="22" alt="GitHub Logo"/>
                    </a>
                
        
          </div>

        </Col>
      </footer>
    </Row>

    </Container>
        

        </>
    );
}

export default Footer;