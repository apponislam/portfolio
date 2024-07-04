import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <footer className="grid grid-cols-2 md:grid-cols-4 p-10 gap-4 text-white">
                    <aside>
                        <p className="text-xl">I working on website since 2020</p>
                    </aside>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-white opacity-100">Services</h6>
                        <a className="link link-hover">Web Development</a>
                        <a className="link link-hover">Web Design</a>
                        <a className="link link-hover">Figma to HTML</a>
                        <a className="link link-hover">Figma to React</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-white opacity-100">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Be A Client</a>
                        <a className="link link-hover">Make Order</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title text-white opacity-100">Contact Us</h6>
                        <a href="tel:01722779803" className="link link-hover">
                            +880 1722 779803{" "}
                        </a>
                        <a href="mailto:11appon11@gmail.com" className="link link-hover">
                            11appon11@gmail.com
                        </a>
                        <a href="https://maps.app.goo.gl/ktAHsTSTxpp7pzKw8" target="_blank" className="link link-hover">
                            Fulbari Bus Stand, Dinajpur
                        </a>
                    </nav>
                </footer>
                <div className="py-6 flex-col md:flex-row gap-4 text-white flex items-center justify-between border-t border-white mx-4 xl:mx-0">
                    <p>© 2024 Your Apponislam. All rights reserved.</p>
                    <div>
                        <div className="flex items-center gap-4">
                            <p className="text-white">Follow Us : </p>
                            <a target="_blank" href="https://www.facebook.com/appon19/" className="text-white text-xl">
                                <FaFacebook />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/apponislam/" className="text-white text-xl">
                                <FaLinkedin />
                            </a>
                            <a target="_blank" href="https://twitter.com/Appon2003" className="text-white text-xl">
                                <FaSquareXTwitter />
                            </a>
                            <a target="_blank" href="https://www.instagram.com/apponislam/" className="text-white text-xl">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
