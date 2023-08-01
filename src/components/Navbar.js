import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

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
            <Link to="/" className={scrolled? "navbar-logo-2" : "navbar-logo"}>
                SHALU <i className="fab fa-typo3"></i>
            </Link>
            <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                <li className = 'nav-item' >
                    <Link activeClass="active" className={scrolled? 'nav-links-2' : 'nav-links'} onClick={closeMobileMenu} smooth spy to="/about">
                     About Me
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to ='/projects' className={scrolled? 'nav-links-2' : 'nav-links'} onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className = 'nav-item'>
                    <Link to ='/contact-me' className={scrolled? 'nav-links-2' : 'nav-links'} onClick={closeMobileMenu}>
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar;
