import shipping from "../assets/shipping.png";
import gift from "../assets/gift.png";
import payment from "../assets/payment.png";
import refund from "../assets/return.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
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
      id="services"
      className=" w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10"
    >
      {/*+++++++++++++++++ services card 1 +++++++++++ */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className=" flex flex-col justify-center items-center gap-2"
      >
        <img src={shipping} alt="" className="mb-[20px] w-[60px]" />
        <h1
          className="text-xl text-black font-semibold 
        "
        >
          Worldwide Shipping{" "}
        </h1>
        <p className="text-[17px] text-gray-500">Lorem ipsum dolor sit amet.</p>
      </div>
      {/*+++++++++++++++++ services card 2  +++++++++++ */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className=" flex flex-col justify-center items-center gap-2"
      >
        <img src={payment} alt="" className="mb-[20px] w-[60px]" />
        <h1
          className="text-xl text-black font-semibold 
        "
        >
          Secure Payment{" "}
        </h1>
        <p className="text-[17px] text-gray-500">Lorem ipsum dolor sit amet.</p>
      </div>
      {/*+++++++++++++++++ services card 3 +++++++++++ */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className=" flex flex-col justify-center items-center gap-2"
      >
        <img src={refund} alt="" className="mb-[20px] w-[60px]" />
        <h1
          className="text-xl text-black font-semibold 
        "
        >
          Return/Refund{" "}
        </h1>
        <p className="text-[17px] text-gray-500">Lorem ipsum dolor sit amet.</p>
      </div>
      {/*+++++++++++++++++ services card 4 +++++++++++ */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className=" flex flex-col justify-center items-center gap-2"
      >
        <img src={gift} alt="" className="mb-[20px] w-[60px]" />
        <h1
          className="text-xl text-black font-semibold 
        "
        >
          Best Gift Voucher{" "}
        </h1>
        <p className="text-[17px] text-gray-500">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Services;
