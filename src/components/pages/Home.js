import '../../App.css';
import React from 'react';
import Hero from '../Hero';
import About from  '../About';
import Contact from '../Footer';
import Footer from '../actfoot';
import Projects from '../Card';

function Home(){
    return (
        <>
            <div id="/">
                <Hero/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="projects">
                <Projects/>
            </div>
            <div id="contact-me">
                <Contact/>
            </div>
            <Footer/>
        </>
    );
}

export default Home;