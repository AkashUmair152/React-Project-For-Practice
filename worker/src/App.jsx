import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Testimonials />
      <Services />
    </>
  );
}

export default App;
