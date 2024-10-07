import React, {useState} from 'react';
import './App.css';
import BackgroundAbout from './images/about-background.jpg';
import './About.css';
import sh from './images/nirv.png';

const About = () =>{

    const Back={
        backgroundImage:`url(${BackgroundAbout})`,
        backgroundSize:'cover',
        height:'100vh',
        overflowY:'hidden'
        }

    const Main={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }

    const aboutBody={
        overflowX:"hidden",
        minWidth:"300px",
        paddingTop:"2rem",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }

    const aboutDescription ={
        marginTop:"6rem",
        letterSpacing:"0.2rem",
        maxWidth:"400px",
        display:"flex",
        justifyContent:"center",
        flex:1
    }

    const styledH2 ={
        letterSpacing:"0.15rem",
        flex:1,
        fontSize:'28px',
    }


    return(
        <div style={Back} className="AboutMain">
            <div style={Main}>
                <div style={aboutBody}>
                    <p style={aboutDescription} className="AboutDescription">We try our best to bring the best outcome of a project.
                     this project was meant to create an interface showing up information related to Space
                    all while using the NASA API. Thank you for visiting.</p>
                    <p style={aboutDescription} className="AboutDescription">Sincerely.<br/>Ralph Saridar.</p>
                    <img src={sh} className="sh"/>
                </div>
            </div>
        </div>
        
    )
}

export default About;