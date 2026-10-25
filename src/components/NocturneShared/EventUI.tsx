 'use client';

import { useEffect, useRef, useState } from 'react';
import type { NocturneEvent } from '@/data/events';
import './EventUI.css';

export function formatNocturneDate(date: string) {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Melbourne',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

export function EventArtwork({
  event,
  className = '',
}: {
  event: NocturneEvent;
  className?: string;
}) {
  return (
    <div className={`nocturne-artwork ${className}`}>
      <picture>
        {event.mobileImage && (
          <source
            media="(max-width: 760px)"
            srcSet={event.mobileImage}
          />
        )}
        <img
          className="nocturne-artwork-image"
          src={event.desktopImage}
          alt={`${event.title} event artwork`}
          style={{
            objectPosition: event.imagePosition ?? 'center',
          }}
        />
      </picture>
    </div>
  );
}

export function TicketLink({ event }: { event: NocturneEvent }) {
  if (!event.ticketUrl) return null;

  return (
    <a
      className="nocturne-ticket"
      href={event.ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      TICKETS
    </a>
  );
}

function EventDetails({ event }: { event: NocturneEvent }) {
  return (
    <div className="nocturne-card-details">
      <p className="nocturne-event-date">
        {formatNocturneDate(event.date)}
      </p>

      <h2>{event.title}</h2>
      <p className="nocturne-venue">{event.venue}</p>

      {event.lineup.length > 0 && (
        <p className="nocturne-lineup">
          {event.lineup.join(' / ')}
        </p>
      )}
    </div>
  );
}

export function EventCarousel({
  items,
  emptyMessage,
}: {
  items: NocturneEvent[];
  emptyMessage: string;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateControls = () => {
      const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

      setCanScrollLeft(carousel.scrollLeft > 1);
      setCanScrollRight(maxScroll - carousel.scrollLeft > 1);
    };

    updateControls();

    carousel.addEventListener('scroll', updateControls, {
      passive: true,
    });

    const observer = new ResizeObserver(updateControls);
    observer.observe(carousel);

    Array.from(carousel.children).forEach((child) =>
      observer.observe(child),
    );

    return () => {
      carousel.removeEventListener('scroll', updateControls);
      observer.disconnect();
    };
  }, [items]);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard =
      carousel.querySelector<HTMLElement>('.nocturne-event-card');

    const distance = firstCard
      ? firstCard.offsetWidth + 16
      : carousel.clientWidth * 0.8;

    carousel.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    });
  };

  if (items.length === 0) {
    return <p className="nocturne-empty">{emptyMessage}</p>;
  }

  return (
    <div className="nocturne-carousel-wrap">
      {(canScrollLeft || canScrollRight) && (
        <div className="nocturne-carousel-controls">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              aria-label="Previous event"
            >
              ←
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              aria-label="Next event"
            >
              →
            </button>
          )}
        </div>
      )}

      <div className="nocturne-event-carousel" ref={carouselRef}>
        {items.map((event) => (
          <article className="nocturne-event-card" key={event.id}>
            <EventArtwork event={event} />

            <div className="nocturne-card-content">
              <EventDetails event={event} />
              <TicketLink event={event} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function LoadingDots() {
  return (
    <span className="nocturne-loading-dots" aria-hidden="true">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
}