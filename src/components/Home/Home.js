import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import ImageSlideIn from '../ImageSlideIn/ImageSlideIn';

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
    <div id="about" className="about">
      <p>Consisting of Sara and Joe, born in the UK and are now based in Melbourne/Naarm. Their early years on the UK rave circuit immersed them in bass-filled warehouses and vibrant fields teeming with energetic ravers...</p>
    </div>
    <div id="image-gallery" className="image-gallery">
      <ImageSlideIn ref={(el) => (imageRefs.current[0] = el)} src="/img/touchbass.jpg" alt="Stackpackers at Touch Bass / Twisted Audio" />
      <p className="photo-credit">Photo by <a href="https://www.instagram.com/larkzvisuals_events/" target="_blank" rel="noopener noreferrer">Larkz Visuals</a></p>
    </div>
  </div>
  );
}
