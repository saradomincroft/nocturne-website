
'use client';

import React, { forwardRef } from 'react';
import './ImageSlideIn.css';

interface ImageSlideInProps {
  src: string;
  alt: string;
}

const ImageSlideIn = forwardRef<HTMLDivElement, ImageSlideInProps>(
  ({ src, alt }, ref) => {
    return (
      <div ref={ref} className="image-slide-in">
        <img src={src} alt={alt} />
      </div>
    );
  }
);

ImageSlideIn.displayName = 'ImageSlideIn';

export default ImageSlideIn;
