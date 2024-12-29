import { chooseus } from "../export";
const Why = () => {
  return (
    <section
      id="about"
      className='class=" bg-slate-900 flex flex-col justify-center items-center gap-6 w-full lg:px-20 px-10 py-20"'
    >
      <h1 className="text-white font-bold text-6xl text-center aos-init aos-animate">
        Why to choose us
      </h1>
      <p className="text-slate-100 text-xl text-center aos-init aos-animate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero
        autem voluptate <br /> quae sunt porro esse cupiditate et architecto
        nam?
      </p>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10 mt-10 basis-full">
        {chooseus.map((choice, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl flex flex-col justify-center items-center gap-4 basis-full aos-init aos-animate"
          >
            <img
              src={choice.image}
              alt=""
              className="h-[200px] w-[200px] transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer"
            />
            <h1 className="text-xl font-bold text-black">{choice.heading}</h1>
            <p className="text-center text-slate-700 text-lg">{choice.para}</p>
            <button className=" text-yellow-500 underline text-lg font-bold hover:text-black">
              {choice.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
