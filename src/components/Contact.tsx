import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { PERSONAL_INFO } from "../constants";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${PERSONAL_INFO.email}`} data-cursor="disable">
                {PERSONAL_INFO.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${PERSONAL_INFO.phone}`} data-cursor="disable">
                {PERSONAL_INFO.phone}
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={PERSONAL_INFO.socials.twitter}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
