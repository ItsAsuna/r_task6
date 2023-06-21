import './Projects.css'
import React from 'react';
function openGoogleByMethod1(){
  window.open("https://ItsAsuna.github.io/r_task3")
 }
 function openGoogleByMethod2(){
  window.open("https://ItsAsuna.github.io/r_task2")
 }
 function openGoogleByMethod3(){
  window.open("https://ItsAsuna.github.io/r_task5")
 }
 function openGoogleByMethod4(){
  window.open("https://ItsAsuna.github.io/js-task8")
 }

function projects()
{
    return(
        <div className="projects">
            <div class="container">
                
            <span class="hovertext" data-hover="Click the Button to Visit the projects"><h2>My Projects</h2></span>
<pre></pre><pre></pre><pre></pre><pre></pre><pre></pre>
    <div class="row">
        <div class="col">
            <div class="card h-100">
                <img src="https://collegevidya.com/tool/images/age.png" class="card-img-top" />
                <div class="card-body">
                  <h3 class="card-title">Age Calculator</h3>
                  <p class="card-text">This Project helps in finding your age.</p>
                  <button id="btnpg" onClick={openGoogleByMethod3}>Click Here</button>
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card h-100">
              <img class="card-img-top" src="https://www.canarahsbclife.com/content/dam/choice/saving-calculator/saving-banner.png"/>
                  <div class="card-body">
                  <h3 class="card-title">Calculator</h3>
                  <p class="card-text">This helps performing basic calculations</p>
                  <button id="btnpg" onClick={openGoogleByMethod2}>Click Here</button>
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card h-100">
              <img class="card-img-top" src="https://i.ytimg.com/vi/6qBTWBd7TGM/maxresdefault.jpg" />
                <div class="card-body">
                  <h3 class="card-title">Moving Train</h3>
                  <p class="card-text">On clicking the image of train the train moves forward</p>
                  <button id="btnpg" onClick={openGoogleByMethod4}>Click Here</button>
                </div>
              </div>
        </div>
        <div class="col">
            <div class="card h-100">
              <img class="card-img-top" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-wheel-analogous-thumb.png" />
                <div class="card-body">
                  <h3 class="card-title">Color Picker</h3>
                  <p class="card-text">You Can choose Your favorite colour and a variety of colours are available Here</p>
                  <button id="btnpg" onClick={openGoogleByMethod1}>Click Here</button>
                </div>
              </div>
        </div>
    </div>
</div>
</div>
        
    )
}
export default projects;