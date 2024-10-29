import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Category = () => {
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
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex justify-center lg:flex-row flex-col items-center gap-20"
    >
      {/*+++++++++++++++ left side +++++++++++++++++ */}
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-themepurple text-xl font-semibold text-center">
          Favorite item
        </h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] ">
          Popular Category
        </h1>
        <button className="bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold">
          VIEW ALL
        </button>
      </div>
      {/*+++++++++++++++ right side +++++++++++++++++ */}
      <div className="lg:[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
        {/* product item 1 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6 "
        >
          <img src={cat1} alt="" className="rounded-full cursor-pointer  " />
          <h1 className="text-black text-xl font-semibold hover:text-themepurple cursor-pointer">
            Portable Speakers
          </h1>
        </div>
        {/* product item 2 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6 "
        >
          <img src={cat2} alt="" className="rounded-full cursor-pointer  " />
          <h1 className="text-black text-xl font-semibold hover:text-themepurple cursor-pointer">
            Air Conditioners
          </h1>
        </div>
        {/* product item 3 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6 "
        >
          <img src={cat3} alt="" className="rounded-full cursor-pointer  " />
          <h1 className="text-black text-xl font-semibold hover:text-themepurple cursor-pointer">
            EV Charging cable
          </h1>
        </div>
        {/* product item 4 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6 "
        >
          <img src={cat4} alt="" className="rounded-full cursor-pointer  " />
          <h1 className="text-black text-xl font-semibold hover:text-themepurple cursor-pointer">
            DVD Player slot
          </h1>
        </div>
        {/* product item 5 */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-6 "
        >
          <img src={cat5} alt="" className="rounded-full cursor-pointer  " />
          <h1 className="text-black text-xl font-semibold hover:text-themepurple cursor-pointer">
            360 Camera
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
