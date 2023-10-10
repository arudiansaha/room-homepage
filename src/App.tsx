import Carousel from './components/Carousel';
import FooterAbout from './components/FooterAbout';
import NavigationHeader from './components/NavigationHeader';
import SkipLink from './components/SkipLink';

export default function App() {
  return (
    <>
      <SkipLink />
      <NavigationHeader />
      <Carousel />
      <FooterAbout />
    </>
  );
}
