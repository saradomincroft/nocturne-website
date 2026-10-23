import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './Socials.css';


export default function Socials() {
return (
  <Container className="socialsContainer">
    <Row className='socialsContent'>
      <ul>
      <li className="socialsLink">
          <a href="https://instagram.com/nocturneravers" target="_blank" rel="noopener noreferrer">
            <img src="/img/instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://facebook.com/nocturneravers" target="_blank" rel="noopener noreferrer">
            <img src="/img/facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li className="socialsLink">
          <a href="https://www.tiktok.com/@nocturneravers" target="_blank" rel="noopener noreferrer">
            <img src="/img/tiktok.svg" alt="TikTok" />
          </a>
        </li>
      </ul>
    </Row>
  </Container>
);
}
