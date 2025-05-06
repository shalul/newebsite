import './App.css';
import Navbar from './Navbar';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './About';
import Contact from './Footer';
import Resume from './components/Resume';
import Projects from './Card';
import ContactForm from './ContactForm'


function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, []);

  return (
    <>
    <Router>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path = '/about' element={<About/>}/>
            <Route path = '/projects' element={<Projects/>}/>
            <Route path = '/resume' element={<Resume/>}/>
            <Route path = '/contact-me' element={<Contact/>}/>
          </Routes>
        </Router>
    </>  
  );
}

export default App;
