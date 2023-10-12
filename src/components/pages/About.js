import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Portfolio from './Portfolio';
import Resume from './Resume';
import Expertise from './Expertise';

export default function About() {
    return (
        <Container>
        <Container>
            <Row id="about-intro">
                <Col id="about-header-column">
                    <h1 id="about-h">LET ME INTRODUCE MYSELF</h1><br />
                    <p id="about-p">
                    {/* I fell in love with programming while trying to find solutions to problems at work.<br /><br /> */}
                    I’m a software engineer with a love for solving problems. {/*In my professional journey I have gained expertise in various programming languages and tools, while striving to develop a deeper understanding of how software works.*/}<br /><br />

                    I came into software from a non-traditional background. I worked in supply chain for a hospital where I found a scripting program called Macro Express and I created several small scripts to automate some of the repetitive tasks. These small scripts led to a 80% reduction in our monthly bills on hold.<br /><br /> 

                    From there I fell in love with the process of programming and I made the decision to pursue software development full time. Since making that decision I have worked with small teams to build several fullstack web based applications.<br /><br />

                    Beyond coding, I have various interests that bring joy to my life. Cooking is one of my favorite pastimes, I find delight in experimenting with flavors and techniques. It allows me to bring the same problem solving mindset to the kitchen while spending quality time with friends and family.<br /><br />

        {/*I believe in maintaining a balanced lifestyle. Spending quality time with my significant other and family is of utmost importance to me. Whether it's engaging in meaningful conversations or simply enjoying each other's company, these connections fuel my happiness.<br /><br />*/}

                </p>
                </Col>
                <Col id="about-header-image">
                    <img id="about-img" src={require("../../assets/Poo.png")} alt="profile-pic" />
                </Col>
            </Row>
        </Container>

        <Expertise />
        <Portfolio />
        <Resume />
        </Container>
    );
}
