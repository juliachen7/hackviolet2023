import './About.css';
import React, {Fragment} from "react";
import Name from '../Name/Name';
import Background from '../Background/Background';
import Timeline from '../Timeline/Timeline';
import Layout from '../Layout/Layout';

const About = () => {
  return (

    <div className='about'>
      <Layout></Layout>
      <Timeline></Timeline>
      <h1> About Us </h1>
      <p> this is also test</p>
    
    <Name></Name>
    <Background></Background>
    </div>

  )
}

export default About;