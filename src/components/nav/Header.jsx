import "../../styles/Header.css";

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

const Header = () => {
   return (
      <header>
         <div className="container">
            <h1 className="title">Typing Test</h1>
            <h2 className="subtitle">
               made with
               <IconContext.Provider value={{ className: "header-icon" }}>
                  <FaReact />
               </IconContext.Provider>
            </h2>
         </div>
      </header>
   );
};

export default Header;
