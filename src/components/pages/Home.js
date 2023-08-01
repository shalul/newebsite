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
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;