import insta1 from "../assets/insta-1.jpg";
import insta2 from "../assets/insta-2.jpg";
import insta3 from "../assets/insta-3.jpg";
import insta4 from "../assets/insta-4.jpg";
import insta5 from "../assets/insta-5.jpg";
import insta6 from "../assets/insta-6.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Insta = () => {
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
      id="insta"
      className="w-full lg:px-20 px-5 py-[80px] flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-xl font-semibold capitalize"
      >
        Our instagram shop
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="font-semibold text-[42px] capitalize text-center leading-[50px]  "
      >
        Follow on instagram
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8"
      >
        <img src={insta1} alt="" className=" rounded-lg bg-cover bg-center " />
        <img src={insta2} alt="" className=" rounded-lg bg-cover bg-center " />
        <img src={insta3} alt="" className=" rounded-lg bg-cover bg-center " />
        <img src={insta4} alt="" className=" rounded-lg bg-cover bg-center " />
        <img src={insta5} alt="" className=" rounded-lg bg-cover bg-center " />
        <img src={insta6} alt="" className=" rounded-lg bg-cover bg-center " />
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-themepurple hover:bg-themeyellow text-white hover:text-black rounded-lg px-8 py-3 font-semibold mt-10 uppercase"
      >
        #ElectraShop
      </button>
    </div>
  );
};

export default Insta;
