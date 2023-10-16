import React from "react";
import { Container } from "react-bootstrap";

export default function Expertise() {
    return (
        <Container id="expertise-main-container">
            <h1 id="expertise-h1">My Expertise</h1>
            <Container id="expertise-container">
                <div className="expertise-div">
                    <h2 className="expertise-h2">Software Developer</h2>
                    <p className="expertise-p">
                        Passionate about solving problems, learning how things work, and building useful programs.
        <br /><br />Javascript, Go, Python, C++.
                    </p>
                </div>
                <div className="expertise-div">
                    <h2 className="expertise-h2">Back-end Developer</h2>
                    <p className="expertise-p">
                        Experienced with data modeling, RESTful API's, testing, and debugging. 
                        <br /><br />Node.js, Django, Go, mySQL, MongoDB, Jest.
                    </p>
                </div>
                <div className="expertise-div">
                    <h2 className="expertise-h2">Lifelong Learner</h2>
                    <p className="expertise-p">
                        I enjoy the process of learning new technologies, reflecting on how I can make my software better, and engaging with others to learn and grow.
                    </p>
                </div>
            </Container>
        </Container>
    )
}
