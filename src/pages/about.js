import React, { Component }  from 'react';

import '../index.css';
import profile from '../img/bennygabel.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CarouselItem } from 'react-bootstrap';


// Create function
const About = () => {
    return (
        <div>
            <div>
                <img src={profile} alt="Benny Gabel" style={{ width: '300px', height: '300px'}}/> 
            </div>
            <div id="subtitle">
                About Me
            </div>

            <div id="content">
            <text>
                Hi!  <br />
                This is <strong style={{ color:"#009900"}}> Benny Gabel </strong> <br />
                <br />
                My passion for computers started in my childhood.<br />
                Working with databases from early 90s.<br />
                Was part of the group who created the <br />
                credit card department in Banco Wiese,<br />
                Lima Peru.
            </text>

            </div>
<br />
            <div id="subtitle">
                About my experience
            </div>
            <div id="content">
            I am working as a software consultant/developer <br />
            since 1999, on accounting systems <br />
            <text style={{ color:"red" }}>to be continue..</text>
            </div>
        </div>


    )
}

// Export Function 
// module.exports = About
export default About