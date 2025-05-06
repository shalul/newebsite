import React from 'react';
import Button from './Button';
import './actfoot.css';
import logo from "../images/logo.png";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-sub">
                <div className="footer-left">
                    Copyright @ 2025 Shalini Krish
                </div>
                <div className="footer-right">
                    <a href="https://github.com/shalul" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="footer-icon" />
                    </a>
                    <a href="mailto:shalinik@umich.edu">
                        <FaEnvelope className="footer-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/shalini-krish" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="footer-icon" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Footer;
