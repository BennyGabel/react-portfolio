import React, { Component, useState }  from 'react';
import './portfolio.css';
// import profile from '../img/bennygabel.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { CarouselItem } from 'react-bootstrap';



// Create function
const Portfolio = () => {
    const [repos] = useState([
        {ch:2, name:'portfolio', description: 'first portfolio using HTML', github: 'https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/'},
        {ch:3, name:'PasswordGenerator', description: 'Given a user criteria, including amount of characters, generates a password', github: 'https://github.com/BennyGabel/PasswordGenerator', deployed: 'https://bennygabel.github.io/PasswordGenerator/'},
        {ch:4, name:'coding_quiz_challenge', description: 'code related Questionnaire: penallyze wrong answers - keep track of score by users', github: 'https://github.com/BennyGabel/coding_quiz_challenge', deployed: 'https://bennygabel.github.io/coding_quiz_challenge/'},
        {ch:5, name:'work_day_scheduler', description: 'Day planner', github: 'https://github.com/BennyGabel/work_day_scheduler', deployed: 'https://bennygabel.github.io/work_day_scheduler/'},
        {ch:6, name:'WeatherDashboard', description: 'By selecting a City, the web returns the current weather info as well as 5 day forecast', github: 'https://github.com/BennyGabel/WeatherDashboard', deployed: 'https://bennygabel.github.io/WeatherDashboard/'},
        {ch:7, name:'Movie-App', description: 'project done with a group, let you choose currennt movies, option to search by type', github: 'https://github.com/bettinastaartjes/Movie-App', deployed: 'https://bettinastaartjes.github.io/Movie-App/'},
        {ch:9 , name:'readme-generator', description: 'generates a README.md file', github: 'https://github.com/BennyGabel/readme-generator', deployed: 'not deployed'},
        {ch:10, name:'team_generator', description: 'generates an html file with information entered about company structure', github: 'https://github.com/BennyGabel/team_generator', deployed: 'not deployed'},
        {ch:11, name:'note_taker', description: 'Let you take notes and saved them', github: 'https://github.com/BennyGabel/note_taker', deployed: 'https://notetaker-bg2022.herokuapp.com/'},
        {ch:12, name:'EmployeeTracker', description: 'Track employees', github: 'https://github.com/BennyGabel/EmployeeTracker', deployed: ''},
        {ch:13, name:'e-commerce-back-end', description: 'ORM Create back-end, using mysql and sequelize, routes to access information', github: 'https://github.com/BennyGabel/e-commerce-back-end', deployed: 'not deployed'},
        {ch:14, name:'ArtGallery', description: 'Art-Gallery back-end. Uses MySql and sequelize to access over 200 items', github: 'https://github.com/BennyGabel/Art-Gallery', deployed: 'not deployed - data displayed in Insomnia'},
        {ch:17, name:'regex-tutroial', description: 'Explanation of a regex string. Additional Technical information not only for the current regex-string', github: ' https://github.com/BennyGabel/regex-tutorial', deployed: 'https://gist.github.com/BennyGabel/b6725cc9128d9b7daaf2d25e2bb3927d#regex-deeper'},
        {ch:18, name:'social_network', description: 'Social network back-end only. Allow to GET, POST, PUT, DELETE information', github: 'https://github.com/BennyGabel/social_network', deployed: 'not deployed'},        
        {ch:19, name:'text_editor_19', description: 'Text editor Using Webpack (and plugins), IndexDB. Works online and offline Option to install app Use of Workbox and Service Worker', github: '	https://github.com/BennyGabel/text_editor_19', deployed: 'https://text19editor.herokuapp.com/'},        
    ])

    // Not DONE anything yet  -- FROM HERE
    /*
    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };
    */
    // Not DONE anything yet  -- UNTIL HERE
      


    return (
        <div>
<p>
            portfolio
</p>


        <div className="flex-row">
            
        {repos.name}
        

        </div>






        </div>
    )
}

// Export Function 
// module.exports = Portfolio
export default Portfolio