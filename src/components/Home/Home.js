import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

export default function Home() {
  const [logoVisible, setLogoVisible] = useState(false);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((imageRef) => {
        if (imageRef) {
          const rect = imageRef.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          if (isVisible) {
            imageRef.classList.add('slide-in');
          } else {
            imageRef.classList.remove('slide-in');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const typingAnimationDuration = 1200;

    const timer = setTimeout(() => {
      setLogoVisible(true);
    }, typingAnimationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Home" className="tabcontent">
      <div className="header-container">
    <div className="typing-text-container">
      <h1 className="typing-text">Welcome to...</h1>
    </div>
      {logoVisible && (
        <div className="logo-container">
          <img src="/img/nocturne-lettering.svg" alt="Logo" className="logo" />
        </div>
      )}
    </div>
    <div className="link-container">
      <a href="#about" className="link-button">CruCast Melbourne | 30th August <br/> Tickets</a>
      <a href="https://www.eventbrite.com.au/e/nocturne-presents-qzb-melbourne-tickets-984878266407" className="link-button">Noctober Spooky Season Double Pass <br/> (Coming soon)</a>
      <a href="https://www.eventbrite.com.au/e/nocturne-presents-qzb-melbourne-tickets-984878266407" className="link-button">TBA | 4th October  <br/>  Tickets (Coming soon)</a>
      <a href="#https://www.eventbrite.com.au/e/nocturne-presents-captain-bass-melbourne-tickets-984934203717" className="link-button">TBA | 25th October  <br/>  Tickets (Coming soon)</a>
      <a href="#contact" className="link-button">Join The Nocturne Family <br/> Sign Up to Our Mailing List </a>

    </div>
    {/* <div id="image-gallery" className="image-gallery">
    </div> */}
  </div>
  );
}
