import darkImage from '/images/image-about-dark.jpg';
import lightImage from '/images/image-about-light.jpg';

export default function FooterAbout() {
  const about = {
    title: 'About our furniture',
    paragraph: `Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.`,
  };

  return (
    <footer className="footer">
      <img
        className="footer__image"
        src={darkImage}
        alt="room with dark background"
      />
      <div className="footer__about">
        <h3 className="footer__title">{about.title}</h3>
        <p className="footer__paragraph">{about.paragraph}</p>
      </div>
      <img
        className="footer__image"
        src={lightImage}
        alt="room with light background"
      />
    </footer>
  );
}
