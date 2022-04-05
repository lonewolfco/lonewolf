import React from "react";
import '../App.css';
import { Card, CardGroup, Row, Col, Container } from "react-bootstrap/";

// import images
import githubLogo from '../assets/images/GitHub-Mark-64px.png';
import weatherhub from '../assets/images/weatherhub.png';
import weatherhubIcon from '../assets/images/sun-behind-rain-cloud.png';
import dejaBrewIcon from '../assets/images/4.png';
import dejabrew from '../assets/images/dejabrew.png';
import planyourdayIcon from '../assets/images/calendar.png';
import planyourday from '../assets/images/planyourday.png';
import readmeproIcon from '../assets/images/notepad.png';
import readmepro from '../assets/images/readmepro.png';
import notepadIcon from '../assets/images/stickynote.png';
import notepad from '../assets/images/notepadImg.png';
import datacomIcon from '../assets/images/cart.png';
import datacom from '../assets/images/datacom.png';

const styles = {

        card: {
            marginTop: '5rem',
            height: '35rem', 
            width: '22rem',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
        },
        header: {
            fontSize: '3rem',
        },
        
        titleIconStyle: {
            height: '27px', 
            width: "30px"
        },
    
        githubLogoStyle: {
            width: "30px",
            height: "30px"
        },
    
        imgStyle: {
            height: '280px', 
        },
        linkStyle: {
            textDecoration: 'none',
        }
};

const projects = [
    {
        id: 1,
        titleIconSrc: weatherhubIcon,
        title: "WeatherHub",
        imgSrc: weatherhub,
        description: "Using the OpenWeather API, a weather web application that allows the user to search by city to see the current and 5-day forecast, and feature the ability to save searches in an accessible history to be able to quickly research for a city. ",
        githubLogo: githubLogo,
        liveLink: "https://lonewolfco.github.io/weather-hub/?",
        repoLink: "https://github.com/lonewolfco/weather-hub"

    },
    {
        id: 2,
        titleIconSrc: dejaBrewIcon,
        title: "DejaBrew",
        imgSrc: dejabrew,
        description: "Using the Open Brewery & Google Maps API, this app allows the user to find a brewery in their neighborhood by searching by city name. Waiting approval from UnTapped to utilize their API to add data on breweries' current taplists.",
        githubLogo: githubLogo,
        liveLink: "https://lonewolfco.github.io/dejabrew",
        repoLink: "https://github.com/lonewolfco/dejabrew"

    },
    {
        id: 3,
        title: "Plan Your Day",
        titleIconSrc: planyourdayIcon,
        imgSrc: planyourday,
        description: "By utilizing local storage and moment, this app dynamically adjusts the color of the hour rows based on the current time of day, displays the current time of day, and saves the user's input upon the user pressing the save button.",
        githubLogo: githubLogo,
        liveLink: "https://lonewolfco.github.io/plan-your-day",
        repoLink: "https://github.com/lonewolfco/plan-your-day"

    },
    {
        id: 4,
        title: "ReadMe Pro",
        titleIconSrc: readmeproIcon,
        imgSrc: readmepro,
        description: 'Command line app to generate a custom ReadMe file for GitHub projects. The user will interact with the app via node.js by entering the syntax "node index.js" on an integrated terminal.',
        githubLogo: githubLogo,
        liveLink: "https://github.com/lonewolfco/readmepro",
        repoLink: "https://github.com/lonewolfco/readmepro"

    },
    {
        id: 5,
        title: "NotePad",
        titleIconSrc: notepadIcon,
        imgSrc: notepad,
        description: 'This application will utilize the Express Node.js framework to interact with a JSON file that will allow the user to save, retrieve, or delete note data on the NotePad. [Application is deployed via Heroku]',
        githubLogo: githubLogo,
        liveLink: "https://lo-notepad.herokuapp.com/notes",
        repoLink: "https://github.com/lonewolfco/notepad"

    },
    {
        id: 6,
        title: "DataCom",
        titleIconSrc: datacomIcon,
        imgSrc: datacom,
        description: 'Datacom is a back-end command-line data warehouse application for an e-commerce platform. Datacom utilizes Express.js API to use Sequelize to interact with a MySQL database.',
        githubLogo: githubLogo,
        liveLink: "https://github.com/lonewolfco/datacom",
        repoLink: "https://github.com/lonewolfco/datacom"

    },

];


function ProjectCards () {

    return (
        <>
        
        <div className="album py-3 bg-light ">

           
            <div id="projects" className="pt-2 mt-3 pb-3 pb-md-5 text-center w-100 ">
                <h1 id="shadow" className=" ms-3" style={styles.header}>Projects</h1>
            </div>
            
            <div>
                <Container> 
                <Row xs={1}  md={2}  >
                    {projects.map((card) => (
                        
                        <Col>
                            <Card  key={card.id} style={styles.card} className="mx-auto">
                            <Card.Img variant="top" src={card.imgSrc} style={styles.imgStyle}/>
                            <Card.Body>

                                <Card.Title>
                                   <h2> <img src={card.titleIconSrc} style={styles.titleIconStyle} alt="project icon" /> <a className="link-dark" id="shadow-link" href={card.liveLink} style={styles.linkStyle}> {card.title} </a></h2>
                                </Card.Title>

                                <Card.Text>
                                {card.description}
                                </Card.Text>
                                <Card.Link href={card.githubLink}><img src={card.githubLogo} style={styles.githubLogoStyle} ></img></Card.Link>
                            </Card.Body>
                            </Card>
                        </Col>

                     ))}

                    </Row>
                    </Container>
                
            </div>
            </div>
            

            

           
        
        </>
      
    );
}

export default ProjectCards;