import heroImage from "../assets/heroimg.png";

const Hero = () => {
  return (
    <section
      id="root"
      className="w-full h-fit lg:px-20 px-10 pt-20 flex lg:flex-row flex-col justify-center items-center gap-20 bg-cover bg-center"
    >
      <div className=" lg:w-[40%] w-full flex flex-col justify-end items-end">
        <img
          src={heroImage}
          width={600}
          height={700}
          alt=""
          className="animate-scale-up-and-down"
        />
      </div>
      <div
        id="hero-content"
        className="flex flex-col justify-center items-start gap-10 lg:w-[60%] w-full pb-20"
      >
        <h1 className="lg:text-6xl text-5xl text-black font-bold text-center aos-init aos-animate">
          Home Repair Services
        </h1>
        <p className="text-xl font-semibold text-slate-600 text-justify aos-init aos-animate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos
          dolore iste porro tempora cumque placeat dolor. Quos, harum.
          Perspiciatis laboriosam temporibus illo a architecto natus,
          praesentium voluptatum labore quo id assumenda commodi exercitationem
          omnis dolorem provident. <br />
          <br />
          Suscipit quidem voluptatem recusandae dicta! Similique modi molestias
          nemo placeat obcaecati soluta dignissimos?
        </p>
        <button className="px-10 py-4 bg-transparent border-[3px] border-black font-bold hover:bg-black hover:text-white aos-init">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default Hero;
