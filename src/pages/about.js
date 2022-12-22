import React, { Component }  from 'react';

import '../index.css';
import profile from '../img/bennygabel.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


// import * as React from 'react'
// Attempted to use 
// import { View, StyleSheet, Text } from 'reac'

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
            
            <text>Hi!  </text>
            <text>This is <strong style={{ color:"#009900"}}> Benny Gabel </strong></text>
            

{/* Adding/learning View & Text */}
{/* <View>
    <Text>
        `Hi!
        My name is Benny Gabel
        Am learning and preparing myself to become a
        WEB DEVELOPER
        `
    </Text>
</View> */}


            </div>
        </div>


    )
}

// Export Function 
// module.exports = About
export default About