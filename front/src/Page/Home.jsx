import FeatureSection1 from "../Component/FeatureSection1";
import Hero from "../Component/Hero";
import FeatureSection2 from "../Component/FeatureSection2";
import FeatureSection3 from "../Component/FeatureSection3";
import BlogList from "../Component/BlogList";

function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <BlogList/>
    </div>
  );
}

export default Home;
