import FusionCarousel from "../components/FusionCarousel";
import LinkCarousel from "../components/LinkCarousel";
import RitualCarousel from "../components/RitualCarousel";
import SpotlightCard from "../components/SpotlightCard";
import SynchroCarousel from "../components/SynchroCarousel";
import XYZCarousel from "../components/XYZCarousel";

function Home() {
  return (
    <div>
      <SpotlightCard />
      <RitualCarousel />
      <FusionCarousel />
      <SynchroCarousel />
      <XYZCarousel />
      <LinkCarousel />
    </div>
  );
}

export default Home;
