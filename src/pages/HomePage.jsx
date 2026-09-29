import Categories from '../sections/Categories/Categories';
import Download from '../sections/Download/Download';
import Faq from '../sections/Faq/Faq';
import Hero from '../sections/Hero/Hero';
import HowItWorks from '../sections/HowItWorks/HowItWorks';
import Intro from '../sections/Intro/Intro';
import Showcase from '../sections/Showcase/Showcase';
import Sides from '../sections/Sides/Sides';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Sides />
      <HowItWorks />
      <Categories />
      <Showcase />
      <Faq />
      <Download />
    </>
  );
}
