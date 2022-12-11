import "../styles/ModeSwitch.css";

import { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { IoEarthSharp } from "react-icons/io5";
import useOutsideClick from "../hooks/useOutsideClick";

const ModeSwitch = ({ wordType, setWordType }) => {
   const [modeMenu, setModeMenu] = useState(false);
   const wrapperRef = useRef(null);
   const [isOutside, setIsOutside] = useOutsideClick(wrapperRef);

   useEffect(() => {
      if (isOutside) {
         setModeMenu(false);
         setIsOutside(false);
      }
   }, [isOutside]);

   return (
      <div className={`word-select`}>
         <button className="current-mode" onClick={() => setModeMenu(true)}>
            {wordType}
            <IconContext.Provider value={{ className: "mode-icon" }}>
               <IoEarthSharp />
            </IconContext.Provider>
         </button>
         <div className={`mode-select_wrapper ${modeMenu ? "show" : "hide"}`}>
            <div ref={wrapperRef} className="word-select_menu">
               <div className="word-select_menu-item" onClick={() => setWordType("words")}>
                  words
               </div>
               <div className="word-select_menu-item" onClick={() => setWordType("sentences")}>
                  sentences
               </div>
               <div className="word-select_menu-item" onClick={() => setWordType("javascript")}>
                  javascript
               </div>
               <div className="word-select_menu-item" onClick={() => setWordType("python")}>
                  python
               </div>
               <div className="word-select_menu-item" onClick={() => setWordType("sql")}>
                  sql
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModeSwitch;
