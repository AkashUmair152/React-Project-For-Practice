import "aos/dist/aos.css";
import Slider from "react-slick";
import { servicesdata } from "../export";

const ServiceSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div data-aos="zoom-in" className="w-[90%] m-auto">
        {servicesdata.map((item, index) => (
          <div
            key={index}
            id="slider-boxes"
            className="bg-white p-12 rounded-xl flex flex-col justify-center items-start gap-4"
          >
            <div
              id="icon-box"
              className="bg-yellow-500 p-6 rounded-full flex flex-col justify-center items-center transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              {item.icon && (
                <item.icon className="text-black w-[40px] h-[40px]" />
              )}
            </div>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </Slider>
  );
};

export default ServiceSlider;
