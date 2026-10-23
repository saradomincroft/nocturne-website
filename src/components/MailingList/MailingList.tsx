 'use client';

import { useRef, useState, type FormEvent } from 'react';
import { Container } from 'react-bootstrap';

export default function MailingList() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      // The no-cors response is opaque, so Mailchimp's response cannot be verified.
      setError(
        'Your submission was sent, but we could not verify it. Please check your inbox for a confirmation email.',
      );

      formRef.current?.reset();
    } catch (err) {
      console.error('Error submitting Mailchimp form:', err);
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <div id="Contact" className="tabcontent">
      <Container>
        <div className="row justify-content-center">
          <div id="mc_embed_signup_shell">
            <style>{`
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
                box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.1);
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
              #mc_embed_signup .button {
                background-color: #333;
                border: none;
                color: #E66C2C;
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
              #mc_embed_signup .button:hover {
                background-color: #A9A9A9;
              }
              .status-message {
                margin-top: 10px;
              }
              .refferal_badge {
                filter: invert(1);
              }
              @media (max-width: 600px) {
                #mc_embed_signup {
                  width: 100%;
                  max-width: 100%;
                }
              }
            `}</style>

            <div id="mc_embed_signup">
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
                    <label htmlFor="mce-EMAIL">Email address</label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div hidden>
                    <input
                      type="hidden"
                      name="tags"
                      value="7361628,7361624"
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-5000px' }}
                  >
                    <input
                      type="text"
                      name="b_96589083eb15db8d74ebcb1a4_81b9d3afeb"
                      tabIndex={-1}
                      defaultValue=""
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

                  {error && (
                    <p className="status-message" role="status">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}