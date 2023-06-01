import React from "react";
import { Container } from "react-bootstrap";

export default function Expertise() {
    return (
        <Container id="expertise-main-container">
            <h1 id="expertise-h1">My Expertise</h1>
            <Container id="expertise-container">
                <div className="expertise-div">
                    <h2 className="expertise-h2">Software<br /> Development</h2>
                    <div className="thicc-line"></div>
                    <p className="expertise-p">
                        Experienced in OOP and agile development. Passionate about solving problems and learning. <br />Javascript, Python.
                    </p>
                </div>
                <div className="expertise-div">
                    <h2 className="expertise-h2">Full Stack Dev</h2>
                    <p className="expertise-p">
                        I enjoy building responsive and intuitive user interfaces.
                        <br />HTML, CSS, Javascript, React, Next.js, Express.js, MongoDb, and mySQL.
                    </p>
                </div>
                <div className="expertise-div">
                    <h2 className="expertise-h2">Tools</h2>
                    <p className="expertise-p">
                        I am familiar with various tools and technologies.
                        <br />Git, Github, Terminal, Bootstrap.
                    </p>
                </div>
            </Container>
        </Container>
    )
}