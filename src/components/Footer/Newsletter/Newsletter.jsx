import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">NewsLetter</span>
            <span className="big-text">Sign Up For Latest Updates </span>
            <div className="form">
                <input type="text" placeholder="Email Address"/>
                <button>Subscribe</button>
            </div>
            <div className="text">Will Be Used In Accordance With Your Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                    

                </div>
                <div className="icon">
                    <FaTwitter size={14}/>
                    

                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                    

                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                    

                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
