import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
// import ImageSlideIn from '../ImageSlideIn/ImageSlideIn';

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
    const typingAnimationDuration = 4000;

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
      <a href="#about" className="link-button">About Us</a>
      <a href="#music" className="link-button">Music</a>
      <a href="#events" className="link-button">Events</a>
      <a href="#contact" className="link-button">Contact</a>
    </div>
    {/* <div id="image-gallery" className="image-gallery">
    </div> */}
  </div>
  );
}
