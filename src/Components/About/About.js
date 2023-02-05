import './About.css';
import React, {Fragment} from "react";


const About = () => {
  return (
    // <div className="about">
    //     <div className="headerContainer">
    //         <h1> About Us</h1>
    //         <p> this paragraph will be about our website</p>
    //     </div>
    // </div>

    <Fragment>
  
    <section className="about">
    <div className = "row">
    
    <div className="column">
        <div className="about-info">
            <div className="main-title">
                <h2> About Us </h2>
            </div>
            <h3> this is the paragraph for our info</h3>
            <p> test idk what this is</p>
            <p> this is also test</p>
        </div>
        {/* <div className="personal-info">
            <div className="info-row">

            <div className="col"> <p>Name: <span>Darren Zheng</span></p></div>
            <div className="col"> <p>Major: <span>CMDA</span></p></div>
            <div className="col"> <p>Name: <span>Darren Zheng</span></p></div>
            <div className="col"> <p>Major: <span>CS</span></p></div>
            <div className="col"> <p>Name: <span>Alex Wallace</span></p></div>
            <div className="col"> <p>Major: <span>CS</span></p></div>
            <div className="col"> <p>Name: <span>Gawain Zhang</span></p></div>
            <div className="col"> <p>Major: <span>CMDA</span></p></div>

            </div>

        </div> */}
    </div>
        
    </div>

    </section>
    </Fragment>

  )
}

export default About;