
import type { NocturneEvent } from '@/data/events';
import { EventCarousel } from '../NocturneShared/EventUI';
import './PastRaves.css';

type PastRavesProps = {
  pastEvents: NocturneEvent[];
};

export default function PastRaves({ pastEvents }: PastRavesProps) {
  return (
    <section className="nocturne-list-screen nocturne-past-screen">
      <div className="nocturne-list-heading">
        <p className="nocturne-kicker">THE ARCHIVE</p>
        <h1>
          PAST RAVES<span>.</span>
        </h1>
        <p>Previous events.</p>
      </div>

      <EventCarousel
        items={pastEvents}
        emptyMessage="The archive is empty for now."
      />

      <p className="nocturne-swipe-hint">
        SWIPE LEFT / RIGHT TO EXPLORE
      </p>
    </section>
  );
}
