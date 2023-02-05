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
      <p style={{margin: '1px', marginTop: '25px'}}>Welcome to our nutrition menu! We built this website to help women keep track </p>
      <p style={{margin: '1px'}}>track of typical nutrition needs throughout the 4 phases of the menstrual cycle! </p>
      <p style={{margin: '1px'}}>menstrual phase (lasts...)</p>
      <p>Menstrual phase (typically 3-7 days)</p>
      <p>Follicular phase (typically 11-27 days overlaps with menstrual phase)</p>
      <p>Ovulation phase (typically 1 day, commonly half way through the cycle)</p>
      <p>Luteal phase (typically 11-17 days)</p>
      <p style={{margin: '1px'}}>We generate food recommendations (and where to find some of these foods) based </p>
      <p style={{margin: '1px'}}>on the estimated phase as well as the symptoms that you're currently experiencing!</p>
      <p style={{margin: '1px'}}>These foods include nutrients to help balance your hormones.</p>

    
    <Name></Name>
    <Background></Background>
    </div>

  )
}

export default About;