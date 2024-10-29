import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f4i9638", "template_yph0p8p", form.current, {
        publicKey: "VpkxsL6vF9xk3Ziza",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="Join">
      <div className="left-j">
        <hr />
        <div>
          <spn className=" stroke-text">Ready to </spn>
          <spn>Level up</spn>
        </div>
        <div>
          <spn>your body </spn>
          <spn className=" stroke-text">with us?</spn>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
