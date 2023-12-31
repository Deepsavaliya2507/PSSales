import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
// import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Radhe Dhokla, Shop No UL1. Lalbhai Contractor Complex,
                            NR. Bahumali, App, Nanpura,
                            Surat, Gujarat, 395001
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 11111 22222</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: pssalesandservice@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">PALY STATIONS</span>
                    <span className="text">XBOX</span>
                    <span className="text">NINTENDO</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        PSSALES 2023 CREATED BY DEEP PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    {/* <img src={Payment} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;