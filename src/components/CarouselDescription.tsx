import arrowIcon from '/images/icons/icon-arrow.svg';

type CarouselDescriptionProps = {
  title: string;
  paragraph: string;
}

export default function CarouselDescription({
  title, paragraph,
}: CarouselDescriptionProps) {
  return (
    <div className="carousel__description">
      <h2 className="carousel__title">{title}</h2>
      <br />
      <p className="carousel__paragraph">{paragraph}</p>
      <br />
      <a className="carousel__link" href="#">
        Shop now&nbsp;<img src={arrowIcon} alt="" />
      </a>
    </div>
  );
}
