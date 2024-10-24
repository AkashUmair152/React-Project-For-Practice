import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
