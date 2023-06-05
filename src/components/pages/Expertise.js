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
                        I create elegant and efficient solutions that bring ideas to life, while continuously adapting to evolving technologies and best practices. 
                    </p>
                </div>
                <div className="expertise-div">
                    <h2 className="expertise-h2">Full Stack Dev</h2>
                    <p className="expertise-p">
                        <br />HTML, CSS, Javascript, React, Next.js, Node.js, Express.js, MongoDB, and mySQL.
                    </p>
                </div>
                <div className="expertise-div">
                    <h2 className="expertise-h2">Tools</h2>
                    <p className="expertise-p">
                        <br />Git, Github, Terminal, Bootstrap, Visual Studio Code, Stack Overflow, and Google. 
                    </p>
                </div>
            </Container>
        </Container>
    )
}