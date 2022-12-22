import React, { Component }  from 'react';
import '../index.css';
import profile from '../img/bennygabel.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


// Create function
const About = () => {
    return (
        <div>
            <div>
                <img src={profile} alt="Benny Gabel" style={{ width: '400px', height: '400px'}}/> 
            </div>
            <div id="subtitle">
                About Me
            </div>

            <div id="content">
                {/* Hi!  <br>
My name is Benny Gabel */}
            
            Hi!  {'/n'}
My name is Benny Gabel 


            </div>
        </div>


    )
}

// Export Function 
// module.exports = About
export default About