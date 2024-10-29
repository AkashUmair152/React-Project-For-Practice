import deal from "../assets/deal-bg.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div id="banner" className="w-full lg:px-20 px-5 py-[80px]">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full h-[300px] reounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4"
        style={{ backgroundImage: `url(${deal})` }}
      >
        <h1 className="text-themeyellow text-xl font-semibold ">
          Everyday shopping{" "}
        </h1>
        <h1 className=" text-[42px] leading-[50px] text-white font-bold text-center ">
          deal of the day
        </h1>
      </div>
    </div>
  );
};

export default Banner;
