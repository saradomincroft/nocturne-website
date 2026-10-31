
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
  const hasMultipleEvents = upcomingEvents.length > 1;

  const showPreviousEvent = () => {
    setFeaturedIndex((index) => Math.max(0, index - 1));
  };

  const showNextEvent = () => {
    setFeaturedIndex((index) =>
      Math.min(upcomingEvents.length - 1, index + 1),
    );
  };

  return (
    <section className="nocturne-home-screen">
      {featuredEvent ? (
        <div
          className="nocturne-featured-event"
          key={featuredEvent.id}
        >
          <div className="nocturne-home-content">
            <div className="nocturne-event-top">
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
            </div>
          </div>

          {hasMultipleEvents && (
            <div
              className="nocturne-feature-controls"
              aria-label="Browse upcoming events"
            >
              <button
                className="nocturne-previous-event"
                type="button"
                aria-label="Previous event"
                onClick={showPreviousEvent}
                disabled={safeFeaturedIndex === 0}
              >
                ←
              </button>

              <button
                className="nocturne-next-event"
                type="button"
                aria-label="Next event"
                onClick={showNextEvent}
                disabled={
                  safeFeaturedIndex === upcomingEvents.length - 1
                }
              >
                →
              </button>
            </div>
          )}

          <div className="nocturne-poster-wrap">
            <EventArtwork
              event={featuredEvent}
              className="nocturne-hero-artwork"
            />
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
