
import { galleryImages } from '@/data/gallery';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="nocturne-list-screen nocturne-gallery-screen">
      <div className="nocturne-list-heading">
        <p className="nocturne-kicker">ON THE FLOOR</p>
        <h1>
          GALLERY<span>.</span>
        </h1>
        <p>Through the lens.</p>
      </div>

      <div className="nocturne-gallery-track">
        {galleryImages.map((image) => (
          <figure
            className="nocturne-gallery-image"
            key={image.src}
          >
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>

      <p className="nocturne-swipe-hint">
        SWIPE THROUGH THE GALLERY ↔
      </p>
    </section>
  );
}
