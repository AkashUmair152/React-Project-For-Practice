const Hero = () => {
  return (
    <div>
      <div
        className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold text-green-700 xl:text-5xl lg:text-3xl">
            <span className="block w-full">Get a financial experience</span> for
            growing your business!
          </h1>
          <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering you to make better financial decisions, We truly are
            professional money planners...
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white
             rounded-lg md:px-8 bg-green-600 hover:bg-green-700 group"
            >
              <span>Explore More</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider border-2
            border-[#3da44b] bor rounded-lg md:px-8 hover:scale-105 group"
            >
              <span>Watch a Video</span>
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="../../public/asset 1.png"
            alt="Awesome hero page image"
            width="350"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
