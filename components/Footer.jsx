import React from 'react';
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-container">
                <p>2022 🔥 Prajul's Shop 🔥 All rights reserved</p>

                <p className="icons">
                    <AiFillInstagram/>
                    <AiOutlineTwitter/>
                </p>
            </div>
        </React.Fragment>
    );
};

export default Footer;
