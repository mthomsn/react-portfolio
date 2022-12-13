import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ name, description, image, technologies, link, repo }) {
  return (
      <Card style={{ width: '18rem' }} id="project-card">
        <Card.Img variant="top" src={image} id="project-img"/>
        <Card.Body class="project-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description} <br></br>
            {technologies}
          </Card.Text>
          <div id="project-btn-container">
            <Button className="project-btn" variant="primary" href={link}>Live</Button>
            <Button className="project-btn" variant="primary" href={repo}>Repo</Button>
          </div>
        </Card.Body>
      </Card>
  );
}

export default ProjectCard;
