import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Footer position={"fixed"} bottom={"0"} w={"full"} />
    </>
  );
};

export default Home;
