
import { useRef } from 'react';
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
      <img
        className="nocturne-artwork-image"
        src={event.desktopImage}
        alt={`${event.title} event artwork`}
        style={{
          objectPosition: event.imagePosition ?? 'center',
        }}
      />
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
      TICKETS <span aria-hidden="true">↗</span>
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

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(
      '.nocturne-event-card',
    );

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
      <div className="nocturne-carousel-controls">
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          aria-label="Previous event"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => moveCarousel(1)}
          aria-label="Next event"
        >
          →
        </button>
      </div>

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
