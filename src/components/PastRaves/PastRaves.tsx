
'use client';

import { useRef } from 'react';
import { events } from '@/data/events';
import type { NocturneEvent } from '@/data/events';
import './PastRaves.css';

export default function PastRaves() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');

  const pastEvents: NocturneEvent[] = events
    .filter((event) => event.date < todayString)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="nocturne-list-screen nocturne-past-screen">
      <div className="nocturne-past-heading">
        <h1>
          PAST RAVES<span>.</span>
        </h1>
      </div>

      {pastEvents.length > 0 && (
        <div
          className="nocturne-past-carousel"
          ref={carouselRef}
        >
          {pastEvents.map((event) => (
            <article
              className="nocturne-past-card"
              key={event.id}
            >
              <div className="nocturne-past-image-wrap">
                <img
                  src={event.desktopImage}
                  alt={`${event.title} event artwork`}
                  className="nocturne-past-image"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
