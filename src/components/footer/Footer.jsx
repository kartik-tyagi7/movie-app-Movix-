import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer text-white ">
      <div className="max-container m-auto text-center flex flex-col items-center">
        <div className="my-9 max-sm:my-6">
          <ul className="flex gap-8 max-md:gap-4 text-md max-md:text-xs transition-all">
            <li className="cursor-pointer hover:text-pink  transition-all">
              Terms Of Use
            </li>
            <li className="cursor-pointer hover:text-pink transition-all">
              Privacy-Policy
            </li>
            <li className="cursor-pointer hover:text-pink transition-all">
              About
            </li>
            <li className="cursor-pointer hover:text-pink transition-all">
              Blog
            </li>
            <li className="cursor-pointer hover:text-pink transition-all">
              FAQ
            </li>
          </ul>
        </div>
        <div className="md:max-w-[70%]">
          <p className="text-sm max-md:text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex gap-4 my-10 max-sm:my-5">
          <div className="socalMedaIcon">
            <FaFacebookF />
          </div>
          <div className="socalMedaIcon">
            <FaInstagram />
          </div>
          <div className="socalMedaIcon">
            <FaTwitter />
          </div>
          <div className="socalMedaIcon">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
