import { MouseEvent } from 'react';
import angleLeftIcon from '/images/icons/icon-angle-left.svg';
import angleRightIcon from '/images/icons/icon-angle-right.svg';

type CarouselDirectionProps = {
  onPrevClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onNextClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function CarouselDirection({
  onPrevClick, onNextClick,
}: CarouselDirectionProps) {
  return (
    <div className="carousel__direction">
      <button
        className="carousel__button"
        type="button"
        aria-label="move to previous section"
        onClick={onPrevClick}
      >
        <img src={angleLeftIcon} alt="" />
      </button>
      <button
        className="carousel__button"
        type="button"
        aria-label="move to next section"
        onClick={onNextClick}
      >
        <img src={angleRightIcon} alt="" />
      </button>
    </div>
  );
}
