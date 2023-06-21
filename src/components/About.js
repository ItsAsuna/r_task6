import './About.css';
import React from 'react';
import img11 from './images/me2.jpg';
function About(){
    return(
        <div>
            <img src={img11} class="abtimg" />
            <body>
            <div class="background2">
            <div className="mn2">
            <h1>Hey Everyone</h1>
            <p></p>
            <h3>I'm Sri Vardhan</h3>
            <p></p>
            <h4>I'm currently doing my Integrated Mtech in VIT Vellore</h4>
            <p></p>
            <h4>Coding and Gaming are My interests</h4>
            <p></p>
            <h4>My Hobbies are</h4>

            <ul>
                <h5><li>Gaming</li></h5>
                <h5><li>Coding</li></h5>
                <h5><li>Anime</li></h5>
                <h5><li>A bit Studying if the subject is interesting :)</li></h5>
            </ul>

        </div></div></body></div>  

    )
}

export default About;