import { TouchEvent, useState } from 'react';
import CarouselBox from './CarouselBox';
import CarouselCover from './CarouselCover';
import CarouselDescription from './CarouselDescription';
import CarouselDirection from './CarouselDirection';

// Hero images desktop
import desktopHeroOne from '/images/heros/desktop-image-hero-1.jpg';
import desktopHeroTwo from '/images/heros/desktop-image-hero-2.jpg';
import desktopHeroThree from '/images/heros/desktop-image-hero-3.jpg';

// Hero images mobile
import mobileHeroOne from '/images/heros/mobile-image-hero-1.jpg';
import mobileHeroTwo from '/images/heros/mobile-image-hero-2.jpg';
import mobileHeroThree from '/images/heros/mobile-image-hero-3.jpg';

export default function Carousel() {
  const [position, setPosition] = useState<number>(0);

  const moveHandler = (event: TouchEvent<HTMLPictureElement>) => {
    if (event.touches[0].clientX > (screen.width / 2) && position !== -200) {
      setPosition(position - 100);
    }

    if (event.touches[0].clientX < (screen.width / 2) && position !== 0) {
      setPosition(position + 100);
    }
  };

  const descriptions = [
    {
      title: 'Discover innovative ways to decorate',
      paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    },
    {
      title: 'We are available all across the globe',
      paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      title: 'Manufactured with the best materials',
      paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    },
  ];

  return (
    <section className="carousel" aria-label="gallery">
      <ol className="carousel__list">
        <CarouselBox position={position}>
          <CarouselCover
            srcSet={desktopHeroOne}
            src={mobileHeroOne}
            alt="white chair with table"
            onTouchStart={moveHandler}
          />
          <CarouselDirection
            onPrevClick={() => setPosition(position - 200)}
            onNextClick={() => setPosition(position - 100)}
          />
          <CarouselDescription
            title={descriptions[0].title}
            paragraph={descriptions[0].paragraph}
          />
        </CarouselBox>
        <CarouselBox position={position}>
          <CarouselCover
            srcSet={desktopHeroTwo}
            src={mobileHeroTwo}
            alt="three chairs with different colors"
            onTouchStart={moveHandler}
          />
          <CarouselDirection
            onPrevClick={() => setPosition(position + 100)}
            onNextClick={() => setPosition(position - 100)}
          />
          <CarouselDescription
            title={descriptions[1].title}
            paragraph={descriptions[1].paragraph}
          />
        </CarouselBox>
        <CarouselBox position={position}>
          <CarouselCover
            srcSet={desktopHeroThree}
            src={mobileHeroThree}
            alt="black chair"
            onTouchStart={moveHandler}
          />
          <CarouselDirection
            onPrevClick={() => setPosition(position + 100)}
            onNextClick={() => setPosition(position + 200)}
          />
          <CarouselDescription
            title={descriptions[2].title}
            paragraph={descriptions[2].paragraph}
          />
        </CarouselBox>
      </ol>
    </section>
  );
}
