import React, { useState } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {

    

    const [EmailSub, setEmailSub] = useState("");

    const email_data = (e) => {
        e.preventDefault()

        let add = e.target.value;
        let value = e.target.value;
        setEmailSub(add);

    }

    const email_subscribe = () => {
        console.log(EmailSub);
    }

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    {/* <input type="text" placeholder="Email Address"
                     onChange={(e => email_log(e))} />
                    <button onClick={() => email_subscribe()}>Subscribe</button> */}
                    <input type="text" placeholder="Email Address"
                     onChange={(e => email_data(e))} />
                    <button onClick={() => email_subscribe()} >Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;