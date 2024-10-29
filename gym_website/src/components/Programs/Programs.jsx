import { programsData } from "../../data/programsData";
import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/*+++++++++++++ header ++++++++++++*/}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((programs) => {
          return (
            // Explicit return added here
            <div className="categories" key={programs.heading}>
              {programs.image}
              <span>{programs.heading}</span>
              <span>{programs.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
