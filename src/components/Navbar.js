import React, {useState, useEffect} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from "../images/logo.png";

function Navbar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    var handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 400){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
      }, [])
    // function for showing button, which i shall use for navbar!!!
  return (
    <>
    <nav className= {scrolled ? "scrolled" : "navbar"}>
        <div className="navbar-container">
            <ScrollLink 
                to="/" 
                smooth={true} 
                duration={50} 
                className={scrolled? "navbar-logo-2" : "navbar-logo"}
                onClick={closeMobileMenu}
            >
                <img src={logo} alt="Logo" className="footer-logo" />
            </ScrollLink>
            <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item' >
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={50}
                    className={scrolled ? 'nav-links-2' : 'nav-links'}
                    onClick={closeMobileMenu}
                >
                    about me
                </ScrollLink>
                </li>
                <li className = 'nav-item' >
                <ScrollLink
                    to="experience"
                    smooth={true}
                    duration={50}
                    className={scrolled ? 'nav-links-2' : 'nav-links'}
                    onClick={closeMobileMenu}
                >
                    experience
                </ScrollLink>
                </li>
                <li className = 'nav-item'>
                <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={50}
                    className={scrolled ? 'nav-links-2' : 'nav-links'}
                    onClick={closeMobileMenu}
                >
                    projects
                </ScrollLink>
                </li>
                <li className = 'nav-item'>
                <ScrollLink
                    to="contact-me"
                    smooth={true}
                    duration={50}
                    className={scrolled ? 'nav-links-2' : 'nav-links'}
                    onClick={closeMobileMenu}
                >
                    contact me
                </ScrollLink>
                </li>
                <li className = 'nav-item'>
                    <a
                        href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:fcf43ae6-dfce-42b9-9fc5-b87a906e145a"
                        className={scrolled ? 'nav-links-2' : 'nav-links'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    resume
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar;
