import '../App.css';
import './About.css';
import collage from '../images/collage-pic.png';
import React, {useState, useEffect} from 'react';

function About(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if(window.scrollY > 0){
            setScrolled(true);
          }
          else{
            setScrolled(false);
          }
        }
  
          window.addEventListener("scroll", onScroll);
  
          return() => window.removeEventListener("scroll", onScroll);
        }, [])
    return(
        <>
        <div className="about" path='/about'>
            <tr>
                <td>
                <div className= { 'about-text'}>About me</div>
                    <div className= {'about-text-2'} path='/about'> My love for coding started when I was in 6th grade, when I was introduced to block coding languages like Scratch. This kickstarted my career, and I picked up languages like <del>Java, C++, Python, Javascript, HTML/CSS, and R!</del> <br/>

In addition, I have done research and apprenticeships with companies such as <nobr><del>Microsoft</del> and<del> Google</del>, as well have joined clubs</nobr> on campus such as Wolvsec and MASA!

I'm looking to work in a professional setting through internships, and to get my hands on code that will fuel the future.</div>

                </td>
                <td>
                <img src = {collage} alt = "about-img" width={600}></img>
                </td>
            </tr>
                    
                </div>
                
                
                </>
    )
}

export default About;