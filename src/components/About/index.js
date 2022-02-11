import React from 'react'
import coverImage from "../../assets/cover/IMG_2093.JPG";
import austinImage from "../../assets/cover/austin.jpg";
function About() {

  return (
    <section className="my-5" >
      <div className="card shadow border-0">
        <div>
          <div className='myName'>
          <h1>Julissa Hash</h1>
          </div>
          <p className='career'>Front End Developer</p>
          <p className='city'>Austin, Texas</p> 
        </div>

        <div className="image1">
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div> 
        <div className='saying'>
        <p>“Equality is the soul of liberty; there is, in fact, no liberty without it. <br/> ~Frances Wright (1795 - 1852) Writer~”</p>
        </div>
      </div>
      <div className='image2'>
      
        <img src={austinImage} className="my-a" style={{ width: "100%" }} alt="cover" />
        <div>
        <p><a href="https://www.austintexas.org/">Austin, Texas</a></p>
        </div>
        </div>
      <div className="text">
        <p className='intro'>
          Julissa is a full stack developer instructed by the University of Texas coding boot camp. This program helped her setting knowledge on newly development skills in JavaScript, CSS, React.js and responsive web design MERN. She is looking forward to join a development company to create and update responsive applications, developing a more effective and dynamic user interaction with innovation, problem solving and visual appeal web design which is one of her biggest passions.

        </p>
      </div>
    </section>
  );
}

export default About;