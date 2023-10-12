import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project';
import passwordGeneratorImage from '../../assets/passwordGenerator.jpg';
import eventifyImage from '../../assets/eventify-image.png';
import weatherDashboardImage from '../../assets/weather-dashboard-image.png';
import emsDashboardImage from '../../assets/EMS_dashboard.png';

const projects = [
    {
        name: 'Eventify',
        description: 'Search by location to find events happening in given location and provides information about the event and a link to purchase tickets.',
        image: eventifyImage,
        // technologies: 'HTML, CSS, JavaScript',
        link: 'https://tisforthomas.github.io/team-project-one/',
        repo: 'https://github.com/TIsForThomas/team-project-one',
    },
    {
        name: 'Employee Management System',
        description: 'Application targeted at small buisness owners to track basic employee data',
        image: emsDashboardImage,
        // technologies: 'HTML, CSS, JavaScript',
        link: 'https://github.com/mthomsn/Employee-Management-System',
        repo: 'https://github.com/mthomsn/Employee-Management-System',
    },
    {
        name: 'Weather Dashboard',
        description: 'Allows users to search for a city and see the current weather conditions and a five-day forecast.',
        image: weatherDashboardImage,
        // technologies: 'HTML, CSS, JavaScript',
        link: 'https://mthomsn.github.io/challenge-6/',
        repo: 'https://github.com/mthomsn/challenge-6',
    },
    {
        name: 'Random Password Generator',
        description: 'Simple application that allows the user to choose the length of the password and what types of characters to include.',
        image: passwordGeneratorImage,
        // technologies: 'HTML, CSS, JavaScript',
        link: 'https://mthomsn.github.io/challenge-3/',
        repo: 'https://github.com/mthomsn/challenge-3',
    }
];

function Portfolio() {
    const projectsPerRow = 3;
  
    const projectCards = [];
    for (let i = 0; i < projects.length; i += projectsPerRow) {
      const projectsInRow = projects.slice(i, i + projectsPerRow);
      const columns = projectsInRow.map((project, index) => (
        <Col md={4} key={index} className='project-columns'>
          <Project
            name={project.name}
            description={project.description}
            image={project.image}
            // technologies={project.technologies}
            link={project.link}
            repo={project.repo}
          />
        </Col>
      ));
      const row = <Row key={i}>{columns}</Row>;
      projectCards.push(row);
    }
  
    return (
      <div id="projects-container">
        <h1 id="project-header">My Projects</h1>
        <Container id="project-card-container">
          {projectCards}
        </Container>
      </div>
    );
  }

export default Portfolio;
