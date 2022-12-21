import React, { Component }  from 'react';
import profile from './BennyGabel'
import 'bootstrap/dist/css/bootstrap.min.css'

// Create function
const About = () => {
    return (
        <div>
            <img src={profile} alt="Benny Gabel"/>
        </div>
    )
}

// Export Function 
// module.exports = About
export default About