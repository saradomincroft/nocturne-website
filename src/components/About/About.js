import React from 'react';
import './About.css';


export default function About() {
  return (
    <div className="about-container">
      <div className="about-logo-box">
      <img src="/img/nocturne-lettering.svg" alt="Logo" className="about-logo" />
      </div>
      <h2 className="about-title">Drum and Bass Raves Created by <a href="https://stackpackers.com" target="_blank" className="stackpackers-link">Stackpackers</a></h2>
      <p className="about-vision">
        Our vision is to showcase the very best of what underground drum and bass has to offer in an inclusive and diverse space. 
        From rising stars within Australia to touring international acts.
      </p>
      <p className="about-description">
        Based in Naarm/Melbourne, Nocturne has become a staple of the Melbourne drum and bass scene. 
        A sound and movement focusing on heavy, high-energy drum and bass raves with occasional events on the lighter side 
        with liquid drum and bass and multi-genre events. 
      </p>
      <p className="about-description">
      Over the years, Nocturne has hosted both international and national headliners, and local concept nights Electropolis (energy drum & bass), Down Underground (multi-genre),
      and Cosmic Tides (liquid drum and bass). We also made our interstate debut at Eden Festival in the Northern Territory, hosing a stage takeover on the Serpents Nest.
    </p>
    <p className="about-description">
      Nocturne is commited to hosting high quality drum and bass raves and continues to push the boundaries of the genre.
    </p>
    </div>
  );
}
