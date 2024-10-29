import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import dslr from "../assets/dslr.jpg";
import earbuds from "../assets/earbuds.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div
      id="hero"
      className=" w-full flex justify-center items-center lg:h-[700px] h-[600px] "
    >
      <Slider {...settings} className="w-full">
        {/* +++++++++++ silder number 1 ++++++++++++++ */}
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg "
            >
              Get upto Discounts 80% off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] "
            >
              DSLR 360 <br /> CAMERA
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-white text-2xl "
            >
              100% trusted{" "}
              <span className="text-themeyellow font-semibold">
                Electronics Gadets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
            >
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>
        {/* +++++++++++ silder number 2 ++++++++++++++ */}
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg "
            >
              Get upto Discounts 80% off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] "
            >
              WIRELESS
              <br />
              EARBUDS
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-white text-2xl "
            >
              100% trusted{" "}
              <span className="text-themeyellow font-semibold">
                Electronics Gadets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
            >
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>
        {/* +++++++++++ silder number 3 ++++++++++++++ */}
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg "
            >
              Get upto Discounts 80% off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] "
            >
              WIRELESS <br /> HEADSETS
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-white text-2xl "
            >
              100% trusted{" "}
              <span className="text-themeyellow font-semibold">
                Electronics Gadets
              </span>
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold"
            >
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
