import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Modes from "../components/Modes/Modes";
import Pieces from "../components/Pieces/Pieces";
import Rules from "../components/Rules/Rules";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Modes />
      <Pieces />
      <Rules />
      <Footer />
    </>
  );
}