import HeroContact from "./HeroContact";
import HeroText from "./HeroText";

const heroStyle = {
  //   height: "100vh",
  backgroundImage: "url('/assets/images/Hero/hero.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <section
      style={heroStyle}
      className="hv-screen container my-6 rounded-2xl pt-[200px]"
    >
      <HeroText />
      <HeroContact />
    </section>
  );
};

export default Hero;
