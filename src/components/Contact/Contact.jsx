import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

function Contact() {
  return (
    <div className="c-wrapper" id="ContactUs">
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to Communuicate</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you{" "}
            <br />
            We beleive a good place to live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}

            <div className="flexColStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 238 12</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 238 12</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
              
              
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
