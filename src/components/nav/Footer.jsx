import "../../styles/Footer.css";

import { IconContext } from "react-icons";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { FiCode, FiMail } from "react-icons/fi";

const Footer = () => {
   return (
      <footer>
         <div className="container">
            <a href="#" className="footer-link">
               <IconContext.Provider value={{ className: "footer-icon" }}>
                  <FaGithub />
               </IconContext.Provider>
               Github
            </a>
            <a href="#" className="footer-link">
               <IconContext.Provider value={{ className: "footer-icon" }}>
                  <FaDiscord />
               </IconContext.Provider>
               Discord
            </a>
            <a href="#" className="footer-link">
               <IconContext.Provider value={{ className: "footer-icon" }}>
                  <FiMail />
               </IconContext.Provider>
               Contact
            </a>
            <IconContext.Provider value={{ className: "footer-icon" }}>
               <BsDot />
            </IconContext.Provider>
            <a href="#" className="footer-link">
               <IconContext.Provider value={{ className: "footer-icon" }}>
                  <FiCode />
               </IconContext.Provider>
               exotic
            </a>
         </div>
      </footer>
   );
};

export default Footer;
