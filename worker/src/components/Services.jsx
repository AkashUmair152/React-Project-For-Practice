import ServiceSlider from "./ServiceSlider";
const Services = () => {
  return (
    <section
      id="services"
      className="w-full lg:px-20 px-10 py-20 flex flex-col justify-center items-center gap-6"
      style='background-image: url("/assets/servicesimg-CVyXYclC.webp");'
    >
      <h1 className="text-white font-bold text-6xl text-center aos-init aos-animate">
        Top Rated Services
      </h1>
      <ServiceSlider />
    </section>
  );
};

export default Services;
