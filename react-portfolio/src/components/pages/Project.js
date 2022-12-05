import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ name, description, image, technologies, link, repo }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description} <br></br>
          {technologies}
        </Card.Text>
        <Button variant="primary">Live</Button>
        <Button variant="primary">Repo</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
