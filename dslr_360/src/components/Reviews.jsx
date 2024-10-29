import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { reviewdata } from "../export";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      id="testimonials"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-xl font-semibold capitalize"
      >
        1300+ Customer reviews
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="font-semibold text-[42px] capitalize text-center leading-[50px]  "
      >
        Our customer love
      </h1>
      {/* +++++++++++++++++++ testimoinals +++++++++++++++++++ */}
      <div data-aos="zoom-in" data-aos-delay="200" className="w-full mt-10">
        <Slider {...settings} className="">
          {reviewdata.map((item, index) => (
            <div key={index}>
              {" "}
              {/* key moved to the outer div */}
              <div className="w-full flex flex-col justify-center items-center p-3 lg:p-10 gap-4">
                <img
                  src={item.img}
                  alt=""
                  className="w-[100px] rounded-full "
                />
                <div data-aos="zoom-in" data-aos-delay="200" className="">
                  {/* icons section  */}
                  <div className="flex justify-center items-center gap-1 ">
                    <FaStar className="text-themeyellow " />
                    <FaStar className="text-themeyellow " />
                    <FaStar className="text-themeyellow " />
                    <FaStar className="text-themeyellow " />
                    <FaStar className="text-themeyellow " />
                  </div>
                  <p className="text-lg text-gray-500 text-center">
                    {item.para}
                  </p>
                  <div
                    className="flex justify-center items-center gap-5
                  "
                  >
                    <FaQuoteLeft className=" text-themepurple size-16" />
                    <div className="w-full flex flex-col justify-center items-start ">
                      <h1 className=" text-xl font-semibold text-black capitalize">
                        {item.name}
                      </h1>
                      <h1 className="text-gray-500 capitalize">{item.post}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
