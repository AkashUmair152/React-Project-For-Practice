import { fb, insta, yt, twitter } from "../assets/icons";
const Footer = () => {
  return (
    <section className='class="w-full bg-black text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28"'>
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
        <h1 className=" text-green-600 font-bold text-4xl">DEBUG ENTITY</h1>
        <p className="text-lg text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          dolore tenetur id tempore dolor nisi perspiciatis alias modi quos
          laboriosam.
        </p>
        <div id="logos" className="flex justify-center items-center gap-4 mt-7">
          <span className="bg-white p-2 rounded-full cursor-pointer  hover:bg-green-600">
            <img src={fb} alt="fb icon" width={20} height={20} />
          </span>
          <span className="bg-white p-2 rounded-full cursor-pointer  hover:bg-green-600">
            <img src={insta} alt="insta icon" width={20} height={20} />
          </span>
          <span className="bg-white p-2 rounded-full cursor-pointer  hover:bg-green-600">
            <img src={twitter} alt="twitter icon" width={20} height={20} />
          </span>
          <span className="bg-white p-2 rounded-full cursor-pointer  hover:bg-green-600">
            <img src={yt} alt="youtube icon" width={20} height={20} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold">Pages</h1>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Home
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Pricing
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold">Pages</h1>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Home
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Pricing
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold">Pages</h1>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Home
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Services
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Testimonials
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Pricing
          </li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
