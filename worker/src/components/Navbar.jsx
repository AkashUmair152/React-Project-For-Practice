import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
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
      link: "Services",
      path: "services",
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
      {/* ++++++++++++++ navbar +++++++++++++++ */}
      <nav className=" w-full bg-black  flex justify-between items-center gap-1 lg:px-16 py-5 sticky top-0 z-50">
        <h1 className=" text-yellow-500 font-bold lg:text-[30px] text-3xl uederline italic">
          Worker
        </h1>

        <ul className=" lg:flex justify-center items-center gap-10 hidden">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white text-sm uppercase font-semibold hover:text-black cursor-pointer px-4 py-2 rounded-lg hover:bg-yellow-500"
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
          <button className="text-xl px-6 py-2 text-black hover:text-black hover:scale-110 ease-in-out duration-300 bg-yellow-500 hover:bg-white rounded-3xl">
            Book Now
          </button>
        </div>
        {/* mobile menu start here  */}
        <div
          className=" flex justify-center items-center lg:hidden mt-3 pr-3"
          onClick={toggleMenu}
        >
          <div className=" text-white ">
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
          } w-full h-fit bg-blue-950 p-4 absolute top-[80px] left-0 `}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full bg-blue-950">
            {navItem.map(({ link, path }, index) => (
              <Link
                key={index} // Using index here or path as the key
                className="text-yellow-600 uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black hover:bg-yellow-500 w-full text-center"
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
