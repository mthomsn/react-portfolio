import React, { useState } from 'react';
import Project from './Project';

const projects = [
  {
    name: 'Project 1',
    description: 'Project 1 description',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: '',
    repo: '',
  },
  {
    name: 'Project 2',
    description: 'Project 2 description',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: '',
    repo: '',
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
    name: 'Project 5',
    description: 'Project 5 description',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: '',
    repo: '',
  },
  {
    name: 'Project 6',
    description: 'Project 6 description',
    image: 'https://via.placeholder.com/150',
    technologies: 'HTML, CSS, JavaScript',
    link: '',
    repo: '',
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
      <div className="row">
        {projectCards}
      </div>
    </div>
  );
};

export default Portfolio;