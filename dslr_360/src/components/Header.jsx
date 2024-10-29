import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItem = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "services",
    },
    {
      link: "Products",
      path: "product",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <div>
      <div className=" w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6">
        <h1 className=" text-sm font-semibold flex justify-center items-center gap-2">
          <FaPhoneVolume className=" size-[18px] " />{" "}
          <span>+91 890 293 0910</span>
        </h1>
        <h1 className=" text-sm font-semibold flex justify-center items-center gap-2">
          <FaMapMarkerAlt className=" size-[18px] " />{" "}
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia?
          </span>
        </h1>
        <h1 className=" text-sm font-semibold flex justify-center items-center gap-2">
          <MdEmail className=" size-[18px] " />{" "}
          <span>electrashop@company.com</span>
        </h1>
      </div>
      {/* ++++++++++++++ navbar +++++++++++++++ */}
      <nav className=" w-full bg-gray-100  flex justify-between items-center gap-1 lg:px-16 py-5 sticky top-0 z-50">
        <h1 className=" text-themepurple font-bold lg:text-[30px] text-3xl uederline italic">
          Electra Shop
        </h1>

        <ul className=" lg:flex justify-center items-center gap-10 hidden">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold hover:text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
        <div
          id="header-icon"
          className="lg:flex hidden justify-center items-center gap-6 text-black"
        >
          <FaSearch className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <IoPerson className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <FaHeart className="w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
          <div className=" relative">
            <FaShoppingCart className=" w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple" />
            <div
              className="bg-themepurple hover:bg-themeyellow px-3 py-1 text-white hover:text-black rounded-full absolute
            -top-[24px] -right-[15px] text-[14px] font-bold"
            >
              2
            </div>
          </div>
        </div>
        {/* mobile menu start here  */}
        <div
          className=" flex justify-center items-center lg:hidden mt-3 pr-3"
          onClick={toggleMenu}
        >
          <div className=" ">
            {IsMenuOpen ? (
              <FaXmark className="text-3xl text-themepurple cursor-pointer" />
            ) : (
              <FaBars className="text-3xl text-themepurple cursor-pointer" />
            )}
          </div>{" "}
        </div>

        <div
          className={`${
            IsMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-themepurple p-4 absolute top-[80px] left-0 `}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItem.map(({ link, path }, index) => (
              <Link
                key={index} // Using index here or path as the key
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black w-full text-center"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
