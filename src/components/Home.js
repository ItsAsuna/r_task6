import React from 'react';
import './Home.css';
import img11 from './images/me.jpg.jpeg';

function Home(){
    return(
        <div>
            <img src={img11} class="c2" />
            <h1 className='c1'>"With Great Coding</h1>
            <h1 class='c3'>Comes Great Portfolio"</h1>
            <h3 class="c4">-Sri Vardhan</h3>
            <img src="https://wallpaperaccess.com/full/406173.jpg" class="img" />
        </div>
    )
}

export default Home;