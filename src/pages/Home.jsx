import LinkCarousel from "../components/LinkCarousel";
import SpotlightCard from "../components/SpotlightCard";
import SynchroCarousel from "../components/SynchroCarousel";
import XYZCarousel from "../components/XYZCarousel";

function Home() {
  return (
    <div>
      <SpotlightCard />
      <XYZCarousel />
      <SynchroCarousel />
      <LinkCarousel />
    </div>
  );
}

export default Home;
