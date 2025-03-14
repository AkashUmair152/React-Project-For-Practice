import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-coontainer">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/*+++++++++++++ map on plans cards ++++++++++++++++ */}
      <div className="plans">
        {plansData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, featureIndex) => {
                  return (
                    <div className="feature" key={featureIndex}>
                      <img src={whiteTick} alt="" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>see more benefits</span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
