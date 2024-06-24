
import React from 'react';
import HiringPartners from './HiringPartners'
import ContactUs from './ContactUs'
import img from '../assets/icons/medium-shot-people-learning 1.aeb147191b182d3487fd.png'
import '../App.css'
const WorkshopAnnouncement = () => {
  return (<>
    <div className="workshop-announcement">
      <img src={img} alt="" style={{width:"500px"}}/>
      <div className="workshop-info"style={{backgroundColor:"blue",padding:"70px"}}>
        <h2 style={{color:"white"}}>Experience The Workshop for Free</h2>
        <p style={{color:"white"}}>
          Discover the realm of Graphic Design, Manual Testing, and Full Stack Development in our free workshop.
          Join experts as they unveil the art of coding, design, and innovation. Whether you're a beginner or an
          enthusiast, dive into live demos, real projects, and a world of possibilities. Reserve your spot today,
          next workshop starting on 29th March 2024, from 9:00AM to 1:00PM.
        </p>
        <button style={{backgroundColor:"black"}}>Join Now</button>
      </div>
    
    </div>
    <HiringPartners/>
    <ContactUs/>
    </>
  );
};

export default WorkshopAnnouncement;