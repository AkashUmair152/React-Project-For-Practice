import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
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
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* ++++++++++++++ 1st box start here  ++++++++++++*/}

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-themepurple lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10 "
      >
        <img
          src={client1}
          alt=""
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client2}
          alt=""
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client3}
          alt=""
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client4}
          alt=""
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client5}
          alt=""
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
        <img
          src={client6}
          alt=""
          className=" w-[130px] opacity-70 cursor-pointer hover:opacity-100"
        />
      </div>

      {/* ++++++++++++ 1st box end here +++++++++++++++++*/}

      {/* ++++++++++++++ 2nd box start here  ++++++++++++*/}

      <div
        className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid 
      lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10"
      >
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-between items-start gap-10 grow"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl text-themepurple underline font-bold italic">
              Electra Shop
            </h1>
            <p className=" text-gray-500 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Vel aperiam facilis atque ullam pariatur.Nemo eligendi
              <br /> officiis exercitationem officia reprehenderit.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-start gap-4">
            <h1 className="text-black font text-xl capitalize">
              Download our App
            </h1>
            <div className=" flex justify-center items-center gap-4">
              <img src={google} alt="" className="rounded-lg" />
              <img src={apple} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>
        {/*+++++++++++++++ usefull links ++++++++++++ */}
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className=" text-black font-semibold text-xl capitalize">
            usefull links
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Home
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              About
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Services
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Blogs
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        {/*+++++++++++++++ Information ++++++++++++ */}
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className=" text-black font-semibold text-xl capitalize">
            Information
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Return Policy
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Privacy Policy
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Refund Policy
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Agreement
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              We Our Brand
            </li>
          </ul>
        </div>
        {/*+++++++++++++++ Top Category ++++++++++++ */}
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className=" text-black font-semibold text-xl capitalize">
            Top Category
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Wireless headphone
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Bluetooth speakers
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Portable devices
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Monio live camera
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Movie projector T6
            </li>
          </ul>
        </div>
        {/*+++++++++++++++ Contact Info ++++++++++++ */}
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className=" text-black font-semibold text-xl capitalize">
            Contact Info
          </h1>
          <ul className="mt-8 flex flex-col justify-center items-start gap-2">
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Phone: +1 234 567 890
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Email: info@domain.com
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              401 Broadway, 24th floor,
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              Monio live camera
            </li>
            <li className=" text-gray-500 hover:text-black cursor-pointer">
              orchard view, london, UK
            </li>
          </ul>
        </div>
      </div>

      {/* ++++++++++++ 2nd box end here +++++++++++++++++*/}

      {/* ++++++++++++++ 3rd box start here  ++++++++++++*/}

      <div className=" w-full px-5 lg:px-20 py[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className=" w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10 py-[40px]">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
            <img src={pay1} alt="" className=" w-[50px] rounded-lg" />
            <img src={pay2} alt="" className=" w-[50px] rounded-lg" />
            <img src={pay3} alt="" className=" w-[50px] rounded-lg" />
            <img src={pay4} alt="" className=" w-[50px] rounded-lg" />
          </div>
          <div className="lg:w-[60%] w-full flex lg:flex-col justify-center items-center gap-4 flex-grow ">
            <h1 className="text-black text-2xl font-semibold">
              Subscribe Newsletter
            </h1>
            <div className=" w-full flex justify-center items-start ">
              {" "}
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className=" lg:w-auto w-full capitalize px-6 py-3 rounded-lg"
              />
              <button className="bg-themepurple hover:bg-themeyellow font-semibold text-xl uppercase text-white hover:text-black py-2 px-6 rounded-r-lg">
                Submit
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center relative">
            <p className="text-black text-lg">© 2024 Power by Akash</p>
            <div className=" absolute bottom-[-80px] right-[-50px] p-6 rounded-full bg-themepurple hover:bg-themeyellow text-white hover:text-black">
              <FaArrowUp className=" text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* ++++++++++++ 3rd box end here +++++++++++++++++*/}
    </div>
  );
};

export default Footer;
