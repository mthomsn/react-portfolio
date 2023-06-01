import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { mouseEnter, mouseLeave } from '../../helpers/cursorHover';

function ProjectCard({ name, description, image, technologies, link, repo }) {
    return (
        <Card id="project-card">
            <Card.Img variant="top" src={image} id="project-img"/>
            <Card.Body className="project-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description} <br></br>
                {technologies}
            </Card.Text>
            <div id="project-btn-container">
                <Button className="project-btn" variant="outline-light" href={link} target='blank'>Demo</Button>
                <Button className="project-btn" variant="outline-light" href={repo} target='blank'>Github</Button>
            </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
