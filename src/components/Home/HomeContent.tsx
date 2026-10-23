
'use client';

import { useEffect, useState } from 'react';
import type { NocturneEvent } from '@/data/events';
import {
  EventArtwork,
  LoadingDots,
  TicketLink,
  formatNocturneDate,
} from '../NocturneShared/EventUI';
import './Home.css';

type HomeContentProps = {
  upcomingEvents: NocturneEvent[];
};

export default function HomeContent({
  upcomingEvents,
}: HomeContentProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    setFeaturedIndex(0);
  }, [upcomingEvents]);

  const safeFeaturedIndex = Math.min(
    featuredIndex,
    Math.max(0, upcomingEvents.length - 1),
  );

  const featuredEvent = upcomingEvents[safeFeaturedIndex];


const showPreviousEvent = () => {
  setFeaturedIndex((index) =>
    upcomingEvents.length > 0
      ? (index - 1 + upcomingEvents.length) % upcomingEvents.length
      : 0,
  );
};

const showNextEvent = () => {
  setFeaturedIndex((index) =>
    upcomingEvents.length > 0
      ? (index + 1) % upcomingEvents.length
      : 0,
  );
};

  return (
    <section className="nocturne-home-screen">
      {featuredEvent ? (
        <div className="nocturne-featured-event" key={featuredEvent.id}>
          <EventArtwork
            event={featuredEvent}
            className="nocturne-hero-artwork"
          />

          <div className="nocturne-home-content">
            <div className="nocturne-event-top">
              <p className="nocturne-kicker nocturne-event-counter">
                {String(safeFeaturedIndex + 1).padStart(2, '0')}
                {' / '}
                {String(upcomingEvents.length).padStart(2, '0')}
              </p>

              <p className="nocturne-event-date">
                {formatNocturneDate(featuredEvent.date)}
              </p>
            </div>

            <div className="nocturne-feature-details">
              <h1>{featuredEvent.title}</h1>

              <p className="nocturne-venue">
                {featuredEvent.venue}
              </p>

              {featuredEvent.lineup.length > 0 && (
                <p className="nocturne-lineup">
                  {featuredEvent.lineup.join(' / ')}
                </p>
              )}
            </div>

            <div className="nocturne-event-bottom">
              <TicketLink event={featuredEvent} />

              {upcomingEvents.length > 1 && (
                <div className="nocturne-feature-controls">
                  <button
                    type="button"
                    aria-label="Previous upcoming event"
                    onClick={showPreviousEvent}
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    aria-label="Next upcoming event"
                    onClick={showNextEvent}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="nocturne-no-event">
          <p className="nocturne-kicker">
            THE NEXT ONE IS IN THE WORKS
          </p>

          <h1>
            NEXT RAVE
            <br />
            LOADING
            <LoadingDots />
          </h1>
        </div>
      )}
    </section>
  );
}
