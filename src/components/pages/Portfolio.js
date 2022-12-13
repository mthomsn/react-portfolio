import React, { useState } from 'react';
import Project from './Project';

const projects = [
  {
    name: 'Eventify',
    description: 'Allows users to search by location to find events happening in their area.',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://tisforthomas.github.io/team-project-one/',
    repo: 'https://github.com/TIsForThomas/team-project-one',
  },
  {
    name: 'Employee Management System',
    description: 'Simple application aimed at helping small business owners manage their employees.',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://employee-management-system-1.herokuapp.com/',
    repo: 'https://github.com/mthomsn/Employee-Management-System',
  },
  {
    name: 'Project 3',
    description: 'Project 3 description',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: '',
    repo: '',
  },
  {
    name: 'Project 4',
    description: 'Project 4 description',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: '',
    repo: '',
  },
  {
    name: 'Weather Dashboard',
    description: 'A weather dashboard that allows users to search for a city and see the current weather conditions and a five-day forecast.',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://mthomsn.github.io/challenge-6/',
    repo: 'https://github.com/mthomsn/challenge-6',
  },
  {
    name: 'Random Password Generator',
    description: 'A simple password generator that allows the user to choose the length of the password and what types of characters to include.',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://mthomsn.github.io/challenge-3/',
    repo: 'https://github.com/mthomsn/challenge-3',
  }
];

function Portfolio() {
  const projectCards = projects.map((project, index) => {
    return (
      
      <Project
        key={index}
        name={project.name}
        description={project.description}
        image={project.image}
        technologies={project.technologies}
        link={project.link}
        repo={project.repo}
      />
    );
  });

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row portfolio-container">
        {projectCards}
      </div>
    </div>
  );
};

export default Portfolio;