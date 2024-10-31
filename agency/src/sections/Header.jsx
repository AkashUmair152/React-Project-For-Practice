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
      {/* ++++++++++++++ navbar +++++++++++++++ */}
      <nav className=" w-full bg-black text-white flex justify-between items-center px-8 py-6 lg:px-16 sticky top-0 z-40">
        <h1 className=" text-green-600 text-3xl font-bold">Agency Demo</h1>

        <ul className=" flex justify-center items-center gap-12">
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white text-sm uppercase font-semibold hover:text-white cursor-pointer  py-2 rounded-sm hover:bg-green-600 hover:px-2"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>

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
          } w-full h-fit bg-themepurple py-4 absolute top-[80px] left-0 `}
          onClick={closeMenu}
        >
          <ul className="bg-green-400 flex flex-col justify-center items-center gap-2 w-full">
            {navItem.map(({ link, path }, index) => (
              <Link
                key={index} // Using index here or path as the key
                className=" uppercase font-semibold cursor-pointer py-3 rounded-lg  hover:bg-green-500  hover:text-white w-full text-center"
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
