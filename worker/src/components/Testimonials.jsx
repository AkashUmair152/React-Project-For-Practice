import { clients } from "../export";
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className='class="w-full lg:px-20 px-10 py-20 flex flex-col justify-center items-center gap-6"'
    >
      <h1 className="text-6xl text-black font-bold text-center aos-init aos-animate">
        What Client Says
      </h1>
      <div id="grid" className=" grid lg:grid-cols-3 grid-cols-1 gap-14 mt-10">
        {clients.map((item, index) => (
          <div
            key={index}
            className="border-t-8 border-yellow-500 p-4 flex flex-col justify-center items-start gap-4 aos-init aos-animate"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="text-yellow-500 w-[38px] h-[38px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <h1 className="text-2xl text-black font-semibold">{item.title}</h1>
            <p>{item.para}</p>
            <button className="underline text-lg font-semibold text-yellow-600">
              {item.label}
            </button>
          </div>
        ))}
        <div className="px-10 py-4 bg-transparent border-[3px] border-black font-bold hover:bg-black hover:text-white mt-6 aos-init">
          VIEW MORE
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
