const AboutGrid = ({ icon, heading, text, label }) => {
  return (
    <div className=" flex justify-center items-center gap-55 flex-col  bg-white rounded-lg m-2 p-3 lg:p-7">
      <img
        src={icon}
        height={65}
        width={65}
        alt=""
        className="bg-green-400 hover:bg-green-500 cursor-pointer p-3 rounded-full"
      />
      <h1 className=" text-2xl lg:text-3xl text-center text-green-600 font-semibold">
        {heading}
      </h1>
      <p className=" text-[18px] text-center text-slate-700">{text}</p>
      <p className="bg-green-800 text-white px-6 py-2 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer">
        {label}
      </p>
    </div>
  );
};

export default AboutGrid;
