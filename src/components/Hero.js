import {Button} from './Button'
import '../App.css';
import './Hero.css';
import moar from '../images/last.png';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hero(){
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["A Student", "An Artist", "A Coder", "Shalini Krish ✌️."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()* 100);
    const period = 500;

    useEffect (() =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return ()=>{ clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if(fullText === "Shalini Krish ✌️."){
            return 0;
        }

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }   else if(isDeleting && updateText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(100);
        }
    }

    return (
        <div>
            <div className = 'hero-container'>
                    <h1>{`Hi, I'm `} <span className = "wrap">{text}</span></h1>
                    <div className="lineUp">
                        <p>I'm originally from the Bay Area, California and I'm a senior at the University of Michigan.<br/>
This is a website showcasing some of my experience in the world of computer science, <br/>as well as a bit of my personality!</p>
                        <h2>(scroll for more)</h2>
                    </div>
                    
            </div>
        </div>
    )
} 

export default Hero;