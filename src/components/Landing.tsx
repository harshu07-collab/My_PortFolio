import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { PERSONAL_INFO } from "../constants";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {PERSONAL_INFO.firstName}
              <br />
              <span>{PERSONAL_INFO.lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{PERSONAL_INFO.role1}</div>
              <div className="landing-h2-2">{PERSONAL_INFO.role2}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{PERSONAL_INFO.role2}</div>
              <div className="landing-h2-info-1">{PERSONAL_INFO.role1}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
