import { aboutgrids } from "../exports/index";
import AboutGrid from "../components/AboutGrid";
const About = () => {
  return (
    <section
      id="services"
      className=" w-full h-fit flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 px-7 py-4 lg:px-16 lg:py-12  bg-slate-200"
    >
      {/*+++++++++++++++++ left ++++++++++++++++++ */}

      <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-green-600  font-bold text-6xl">
          Hosting solution with benefits.
        </h1>
        <p className=" text-slate-950 text-2xl">
          Turn your ideas into reality with Static. With a lot of powerful
          features, we guarantee simplicity and clarity.
        </p>
        <div className="flex justify-center items-center gap-7">
          <button className="bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer uppercase">
            Read More
          </button>
        </div>
      </div>

      {/*+++++++++++++++++  right ++++++++++++++++++ */}
      <div className="flex flex-wrap justify-between items-center w-full lg:w-1/2">
        {aboutgrids.map((grid) => (
          <div key={grid.label} className="w-full lg:w-1/2 mb-4">
            <AboutGrid {...grid} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
