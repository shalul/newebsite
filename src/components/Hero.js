import {Button} from './Button'
import '../App.css';
import './Hero.css';
import React, { useEffect, useState } from 'react';


function Hero(){
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["a student", "an artist", "a coder", "shalini krish ✌️."];
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

        if(fullText === "shalini krish ✌️."){
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
                    <h1>{`hi, i'm `} <span className = "wrap">{text}</span></h1>
                    <div className="lineUp">
                        <p>located in the bay area, CA, and a senior at the university of michigan.<br/>
dive into my world with me.</p>
                    </div>
                    
            </div>
        </div>
    )
} 

export default Hero;