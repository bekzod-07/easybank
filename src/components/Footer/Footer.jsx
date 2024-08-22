import React from 'react';
import './Footer.css';
import logo from './logo-white.svg'; // Logoningiz manzili
import { FaFacebookF, FaYoutube, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="app">
                <div className="footer__left">
                    <img src={logo} alt="easybank logo" className="footer__logo" />
                    <div className="footer__social">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaPinterestP /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer__links">
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Support</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer__right">
                    <button className="footer__btn">Request Invite</button>
                    <p>&copy; Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
