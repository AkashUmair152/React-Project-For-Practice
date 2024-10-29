import "./Hero.css";
import hero_image from "./../../assets/hero_image.png";
import hero_image_back from "./../../assets/hero_image_back.png";
import Heart from "./../../assets/heart.png";
import Calories from "./../../assets/calories.png";
import Header from "../Header/Header";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="Hero">
      <div></div>
      <dic className="blur hero-blur"></dic>
      <div className="left-hero">
        <Header />

        {/*+++++++++++++ the best add div +++++++++++++ */}

        <div className="the-best-add">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          >
            {/* Content goes here */}
          </motion.div>
          <span>The best fitness club in the Town</span>
        </div>
        {/*+++++++++++++ Hero Heading +++++++++++++ */}

        <div className=" hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          {/*+++++++++++++ hero text paragraph +++++++++++++ */}
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/*+++++++++++++ figures +++++++++++++ */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*+++++++++++++ hero button  +++++++++++++ */}
        <div className="hero-button">
          <button className="btn btn1">Get start</button>
          <button className="btn btn2">Learn more</button>
        </div>
      </div>
      {/*++++++++++ rifgt side of hero ++++++++++ */}
      <div className="right-hero">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 Bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/*+++++++++ calories +++++++++++++++++ */}

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div className="text">
            <span className="sp1">Clories Burned</span>
            <span className="sp2">220</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
