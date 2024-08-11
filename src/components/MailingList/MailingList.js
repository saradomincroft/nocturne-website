import React from 'react';
import { Container} from 'react-bootstrap';

export default function MailingList() {
  return (
    <div id="Contact" className="tabcontent">
      <Container>
        <div className="row">
          <iframe
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfmimjstNouwZcu3KoVva3vzOjSBb7MwZnhCTUAwSTHG_ChUw/viewform?usp=sf_link" 
            width="100%" 
            height="800"
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">
            Loading…
          </iframe>
        </div>
      </Container>
    </div>
  );
}
