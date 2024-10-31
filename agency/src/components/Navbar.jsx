import { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
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

  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
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
        {/* <div
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
        </div> */}
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

export default Navbar;
