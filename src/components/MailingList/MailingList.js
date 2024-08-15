import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function MailingList() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;

    // Perform AJAX request to submit the form
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Mailchimp requires no-cors mode
      });

      // If the request is successful, update the state to show the thank you message
      if (response) {
        setSubmitted(true);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    // Optionally reset the form (if you need to reset the form fields)
    formRef.current.reset();
  };

  return (
    <div id="Contact" className="tabcontent">
      <Container>
        <div className="row justify-content-center">
          <div id="mc_embed_signup_shell">
            <style type="text/css">
              {`
              #mc_embed_signup {
                background: #000;
                color: #fff;
                clear: left;
                font: 14px monospace, Arial, sans-serif;
                width: 90%;
                max-width: 70%;
                padding: 20px;
                margin: auto;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
              }
              .mc-field-group {
                margin-bottom: 20px;
              }
              .mc-field-group label {
                display: block;
                margin-bottom: 5px;
                color: #fff;
              }
              .mc-field-group input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                background-color: #333;
                color: #fff; 
              }
              .button {
                background-color: #333;
                border: none;
                color: #FF2400; 
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin-top: 10px;
                border-radius: 4px;
                cursor: pointer;
                width: 100%;
              }
              .button:hover {
                background-color: #A9A9A9;
              }
              .status-message {
                margin-top: 10px;
                color: #d9534f;
              }
              .refferal_badge {
                filter: invert(1);
              }
              `}
            </style>
            <div id="mc_embed_signup">
              {!submitted ? (
                <form
                  action="https://nocturneravers.us14.list-manage.com/subscribe/post?u=96589083eb15db8d74ebcb1a4&id=81b9d3afeb&f_id=0077aee5f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div id="mc_embed_signup_scroll">
                    <h2 style={{ color: '#fff' }}>Subscribe</h2>
                    <div className="indicates-required">
                      Signup for early access tickets and discounts!
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL"></label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div hidden="">
                      <input
                        type="hidden"
                        name="tags"
                        value="7361628,7361624"
                      />
                    </div>
                    <div id="mce-responses" className="clear foot">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      ></div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{ position: 'absolute', left: '-5000px' }}
                    >
                      <input
                        type="text"
                        name="b_96589083eb15db8d74ebcb1a4_81b9d3afeb"
                        tabIndex="-1"
                        value=""
                      />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                          className="button"
                          value="Subscribe"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <p>Thank you for subscribing!</p>
              )}
            </div>
            <script
              type="text/javascript"
              src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
            ></script>
            <script type="text/javascript">
              {`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);`}
            </script>
          </div>
        </div>
      </Container>
    </div>
  );
}
