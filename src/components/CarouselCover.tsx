import { TouchEvent } from 'react';

type CarouselCoverProps = {
  srcSet: string;
  src: string;
  alt: string;
  onTouchStart: (event: TouchEvent<HTMLPictureElement>) => void;
}

export default function CarouselCover({
  srcSet, src, alt, onTouchStart,
}: CarouselCoverProps) {
  return (
    <picture className="carousel__cover" onTouchStart={onTouchStart}>
      <source media="(min-width: 768px)" srcSet={srcSet} />
      <img className="carousel__image" src={src} alt={alt} />
    </picture>
  );
}
