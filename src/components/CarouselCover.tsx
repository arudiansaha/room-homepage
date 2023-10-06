type CarouselCoverProps = {
  srcSet: string;
  src: string;
  alt: string;
}

export default function CarouselCover({
  srcSet, src, alt,
}: CarouselCoverProps) {
  return (
    <picture className="carousel__cover">
      <source media="(min-width: 768px)" srcSet={srcSet} />
      <img className="carousel__image" src={src} alt={alt} />
    </picture>
  );
}
