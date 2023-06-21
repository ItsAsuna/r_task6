import './Main.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vid1 from './images/clip.webm'

function Main(){
    return(
        <div>
            <body>
            <div class="background">
            <div class="blur"></div>
            <div className="mn1">
            <h1>Hey Everyone</h1>
            <p></p>
            <h4>I'm Sri Vardhan</h4>
            <h1>Welcome to My Portfolio</h1>
            <video src={vid1} autoPlay="true" loop="true" width="60%" height="25%" ></video>
    


        </div></div></body></div>  
    )
}
export default Main;