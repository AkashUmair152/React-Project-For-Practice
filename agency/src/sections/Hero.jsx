import Hero_img from "../assets/images/heroimg.png";

const Hero = () => {
  return (
    <div className=" w-full h-auto lg:h-sreen flex flex-col lg:flex-row justify-between items-center gap-4 bg-slate-100">
      {/*+++++++++++++++++ hero left ++++++++++++++++++ */}

      <div className=" flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20">
        <h1 className="text-green-600  font-bold text-6xl">
          One-click solution for your static website.
        </h1>
        <p className=" text-slate-950 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          distinctio.
        </p>
        <div className="flex justify-center items-center gap-7">
          <button className="bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer uppercase">
            view more
          </button>
          <button className=" bg-transparent border-2 border-green-800 text-green-800 px-4 lg:px-8 py-3 rounded-md text-[18px] hover:border-black  hover:text-black cursor-pointer uppercase">
            watch video
          </button>
        </div>
      </div>

      {/*+++++++++++++++++ hero left ++++++++++++++++++ */}
      <div className=" flex justify-center items-center w-1/2 px-5 py-20 object-cover">
        <img
          src={Hero_img}
          alt=""
          width={500}
          height={500}
          className=" bg-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
