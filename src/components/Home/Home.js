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
      <a href="https://crucastmlb.eventbrite.com.au/" className="link-button" alt="CruCast Tickets" target="_blank" rel="noopener noreferrer">CruCast Melbourne | 30th August <br/> Tickets</a>
      <a href="https://noctober-spooky-24.eventbrite.com.au" className="link-button" alt="Noctober Double Pass Tickets" target="_blank" rel="noopener noreferrer">🦇 Noctober Spooky Season 🦇<br/> (QZB & Captain Bass) Double Pass <br/>Tickets</a>
      <a href="https://qzb-mlb.eventbrite.com.au/" className="link-button" alt="QZB Tickets" target="_blank" rel="noopener noreferrer">QZB | 4th October  <br/>Tickets</a>
      <a href="https://captainbass-mlb.eventbrite.com.au/" className="link-button" alt="Captain Bass Tickets" target="_blank" rel="noopener noreferrer">Captain Bass | 25th October  <br/>  Tickets</a>
      <a href="/mailing-list" className="link-button" alt="Mailing list">Join The Nocturne Family <br/> Sign Up to Our Mailing List </a>
    </div>

    {/* <div id="image-gallery" className="image-gallery">
    </div> */}
  </div>
  );
}
