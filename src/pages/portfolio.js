import React, { Component, useState }  from 'react';
import '../index.css';
// import profile from '../img/bennygabel.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CarouselItem } from 'react-bootstrap';



// Create function
const Portfolio = () => {
    const [repos] = useState([
        {id:2, name:'portfolio', description: 'first portfolio using HTML', github: 'https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/'},
        {id:3, name:'PasswordGenerator', description: 'Given a user criteria, including amount of characters, generates a password', github: 'https://github.com/BennyGabel/PasswordGenerator', deployed: 'https://bennygabel.github.io/PasswordGenerator/'},
        {id:4, name:'coding_quiz_challenge', description: 'code related Questionnaire: penallyze wrong answers - keep track of score by users', github: 'https://github.com/BennyGabel/coding_quiz_challenge', deployed: 'https://bennygabel.github.io/coding_quiz_challenge/'},
        {id:5, name:'work_day_scheduler', description: 'Day planner', github: 'https://github.com/BennyGabel/work_day_scheduler', deployed: 'https://bennygabel.github.io/work_day_scheduler/'},
        {id:6, name:'WeatherDashboard', description: 'By selecting a City, the web returns the current weather info as well as 5 day forecast', github: 'https://github.com/BennyGabel/WeatherDashboard', deployed: 'https://bennygabel.github.io/WeatherDashboard/'},
        {id:7, name:'Movie-App', description: 'project done with a group, let you choose currennt movies, option to search by type', github: 'https://github.com/bettinastaartjes/Movie-App', deployed: 'https://bettinastaartjes.github.io/Movie-App/'},
        {id:9 , name:'readme-generator', description: 'generates a README.md file', github: 'https://github.com/BennyGabel/readme-generator', deployed: 'not deployed'},
        {id:10, name:'team_generator', description: 'generates an html file with information entered about company structure', github: 'https://github.com/BennyGabel/team_generator', deployed: 'not deployed'},
        {id:11, name:'note_taker', description: 'Let you take notes and saved them', github: 'https://github.com/BennyGabel/note_taker', deployed: 'https://notetaker-bg2022.herokuapp.com/'},
        {id:12, name:'EmployeeTracker', description: 'Track employees', github: 'https://github.com/BennyGabel/EmployeeTracker', deployed: ''},
        {id:13, name:'e-commerce-back-end', description: 'ORM Create back-end, using mysql and sequelize, routes to access information', github: 'https://github.com/BennyGabel/e-commerce-back-end', deployed: 'not deployed'},
        {id:14, name:'ArtGallery', description: 'Art-Gallery back-end. Uses MySql and sequelize to access over 200 items', github: 'https://github.com/BennyGabel/Art-Gallery', deployed: 'not deployed - data displayed in Insomnia'},
        {id:17, name:'regex-tutroial', description: 'Explanation of a regex string. Additional Technical information not only for the current regex-string', github: ' https://github.com/BennyGabel/regex-tutorial', deployed: 'https://gist.github.com/BennyGabel/b6725cc9128d9b7daaf2d25e2bb3927d#regex-deeper'},
        {id:18, name:'social_network', description: 'Social network back-end only. Allow to GET, POST, PUT, DELETE information', github: 'https://github.com/BennyGabel/social_network', deployed: 'not deployed'},        
        {id:19, name:'text_editor_19', description: 'Text editor Using Webpack (and plugins), IndexDB. Works online and offline Option to install app Use of Workbox and Service Worker', github: '	https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/'},        
    ])
        // {name:'', description: '', github: '', deployed: ''},
        // {name:'', description: '', github: '', deployed: ''},
        // {name:'', description: '', github: '', deployed: ''},
        // 
    

    return (
        <div>
<p>
            portfolio
            </p>
<p>
            text 1
            </p>
<p>

            text 2
            </p>
<p>

            text 3
            </p>


            text 4hey

            text 5

            text 6
        </div>
    )
}

// Export Function 
// module.exports = Portfolio
export default Portfolio