import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import { products } from "../export";

const Product = () => {
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
      id="product"
      className="w-full px-5 lg:px-20 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className=" text-xl text-themepurple font-semibold "
      >
        Product Collections
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-black text-[42px] leading-[50px] text-center"
      >
        Trending Products
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center mt-10 gap-10"
      >
        {/*++++++++++++++ products ++++++++++++++++ */}
        {products.map((item, index) => (
          <div
            id="product-box"
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative"
          >
            <img src={item.img} alt="" />
            {/*+++++++++++ icons section +++++++++++++ */}
            <div
              id="icons"
              className="flex justify-center items-center gap-3 absolute top-[20px]"
            >
              <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                <MdOutlineRemoveRedEye />
              </div>
              <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                <FaRegHeart />
              </div>
              <div className="bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white">
                <MdAddShoppingCart />
              </div>
            </div>
            {/* ++++++++++++++ product text section ++++++++++++++++ */}
            <h1 className="text-lg text-gray-400 font-semibold">
              {item.category}
            </h1>
            <h1 className="text-xl text-black font-semibold">{item.name}</h1>
            <div className="flex justify-center items-center gap-6 mt-3">
              <div className="flex justify-start gap-1">
                <FaStar className="text-themeyellow" />
                <FaStar className="text-themeyellow" />
                <FaStar className="text-themeyellow" />
                <FaStar className="text-themeyellow" />
                <FaStar className="text-themeyellow" />
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold">
                SALE 14%
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="300"
        className="bg-themepurple hover:bg-themeyellow text-white hover:text-black rounded-lg px-8 py-3 font-semibold mt-10"
      >
        View more
      </button>
    </div>
  );
};

export default Product;
