import cta1 from "../assets/cta1.png";
const Serivces = () => {
  return (
    <section
      id="services"
      className=" bg-yellow-500 lg:px-20 px-10 lg:py-0 py-20 w-full flex flex-col lg:flex-row gap-20"
    >
      <div
        id="image"
        className="lg:w-[50%] w-full flex flex-col justify-end items-center"
      >
        <img
          src={cta1}
          alt=""
          className="w-[800px] lg:h-[450px] h-[auto] aos-init aos-animate"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-6 lg:py-20">
        <h1 className="text-6xl text-black font-bold aos-init aos-animate">
          Reliable, Trusted and professional Services
        </h1>
        <p className="text-xl font-semibold text-slate-800 text-justify aos-init aos-animate">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          cumque quod corrupti quo reiciendis voluptatibus architecto minima,
          odio pariatur possimus?
        </p>
        <div className="flex flex-col justify-between items-start gap-3 w-full aos-init aos-animate">
          <div className="flex flex-row justify-start items-start gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-[30px] h-[30px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"></path>
            </svg>
            <h1 className="text-xl font-semibold">
              Consistent delivery of high-quality results
            </h1>
          </div>
          <div className="flex flex-row justify-start items-start gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-[30px] h-[30px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"></path>
            </svg>
            <h1 className="text-xl font-semibold">
              Transparent communication and clear expectations
            </h1>
          </div>
          <div className="flex flex-row justify-start items-start gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-[30px] h-[30px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"></path>
            </svg>
            <h1 className="text-xl font-semibold">
              Expertise and proficiency in the relevant field or industry
            </h1>
          </div>
          <div className="flex flex-row justify-start items-start gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-[30px] h-[30px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"></path>
            </svg>
            <h1 className="text-xl font-semibold">
              Dependable and punctual performance
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serivces;
